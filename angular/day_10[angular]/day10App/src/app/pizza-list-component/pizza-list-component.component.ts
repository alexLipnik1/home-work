import { Component, OnInit } from '@angular/core';
import { Pizza } from '../Shared/Pizza/pizza.model';
import { PizzaService } from '../Shared/PizzaService/pizza.service';

@Component({
  selector: 'app-pizza-list-component',
  templateUrl: './pizza-list-component.component.html',
  styleUrls: ['./pizza-list-component.component.css']
})
export class PizzaListComponentComponent  {

  constructor(private PizzaService: PizzaService) { }
  Pizzas = this.PizzaService.getPizza();

  a = () => console.log(this.Pizzas[3])
}
