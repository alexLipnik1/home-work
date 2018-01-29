import { Component} from '@angular/core';

@Component({
  selector: 'app-multipication-table',
  templateUrl: './multipication-table.component.html',
  styleUrls: ['./multipication-table.component.css']
})
export class MultipicationTableComponent {

  constructor() { }

  getTable(){
    let table: any[][];

    table = new Array<Array<any>>(10);
    for (let i: number = 0; i< table.length; i++){
      table[i] = new Array<any>(10)
    }
    for(let i:number = 0; i< table.length ; i++){
      for(let j:number= 0; j<table[i].length; j++){
        table[i][j] = {value: ((i+1)*(j+1))};
      }
    }
    return table;
  }
  
  
  tabels = this.getTable();
  getA = (a) => console.log(a);
  
}
