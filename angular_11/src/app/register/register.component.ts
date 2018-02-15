import { Component, OnInit } from '@angular/core';
import { CountryService } from './../shared/services/country.service';
import { CountryBasic } from './../shared/models/countryBasic.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterUser, User } from './../shared/models/account-models/index';
import {AccountService} from './../shared/services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  RegisterUser: RegisterUser;

  countryList:CountryBasic[];
  countryNamesList:string[];
  selectedCountry:CountryBasic;
  selectCountryMode=false;
  newUser = new RegisterUser(null,null,null,null,null)

  constructor(private countryService:CountryService, private accountService:AccountService,
              private fb: FormBuilder) {
                this.setUser();
                this.createForm();
              }

    createForm() {
      this.RegisterForm = this.fb.group({
        firstName: [this.newUser.firstName , RegisterUser.userNameValidators ],
        lastName: [this.newUser.lastName , RegisterUser.userNameValidators],
        userName: [this.newUser.userName, RegisterUser.userNameValidators],
        userPassword: [this.newUser.userPassword , RegisterUser.userPasswordValidators],
      });
    }

  setCountryMode():void{
    this.selectCountryMode=!this.selectCountryMode;
  }

  setUser(){
    this.newUser.firstName = 'firstName' 
    this.newUser.lastName = 'lastName' 
    this.newUser.userName = 'hello' 
    this.newUser.userPassword = '123456' 
  }

  setUserCountry(x:CountryBasic):void{
    this.setCountryMode();
    this.selectedCountry=x;
    this.newUser.country=x.name;
  }

  changeUser(){
    console.log("this.RegisterForm",this.newUser.country);
    this.accountService.userEventEmitter.emit(new User(this.RegisterForm.value.userName,""));
  }

  ngOnInit() {
    this.countryService.getCountries((res:string[])=>{this.countryNamesList=res});
    
    this.countryService.getCountriesInfo().subscribe(
      (res:CountryBasic[])=>{
        this.countryList=res;
        this.selectedCountry=res.length?res[0]:undefined;
        console.log(this.selectedCountry)
        
        this.newUser.country = this.selectedCountry.name
      }
    );
  }


}
