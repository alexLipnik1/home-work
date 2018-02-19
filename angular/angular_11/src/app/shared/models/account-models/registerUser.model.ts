
import { ValidatorFn ,AbstractControl} from "@angular/forms";
import { ValidConfig} from "./../validators/validConfig.model";
import {ValidationRules} from "./../validators/constConfig";
import { validateConfig } from "@angular/router/src/config";
import { CountryBasic } from './../countryBasic.model';


export class RegisterUser{

    constructor(public userName:string,
                public userPassword:string,
                public firstName:string,
                public lastName:string,
                public country:string,
            ){}

                
                static get userNameValidators(): ValidatorFn[] {
                    return [
                        //TODO: add english chars validation
                        ValidConfig.required("User name is requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_USER_NAME, `User name can't be shorter than ${ValidationRules.MIN_CHARS_USER_NAME} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_USER_NAME, `User name  can't exceeds  ${ValidationRules.MAX_CHARS_USER_NAME} chars.`),
                        ValidConfig.onlyEnglishLaters('User name can only include English charchters')
                    ];
                }


                static get userPasswordValidators(): ValidatorFn[] {
                    return [
                        //TODO: add (english chars / numbesr / * ) validation
                        ValidConfig.required("Password is requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_USER_PASSWORD, `Password can't be shorter than ${ValidationRules.MIN_CHARS_USER_PASSWORD} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_USER_PASSWORD, `Password can't exceeds  ${ValidationRules.MAX_CHARS_USER_PASSWORD} chars.`),
                        ValidConfig.onlyEnglishLatersAndNumbers('User name can only include English charchters and numbers')
                        
                    ];
                }
            
            
}

