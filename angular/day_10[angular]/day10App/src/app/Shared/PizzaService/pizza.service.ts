import { Pizza } from "../Pizza/pizza.model"

export class PizzaService {

    getNewPizza(){
        const diameter = Math.floor(10 + Math.random() * 40);
        const slices = Math.floor(3 + Math.random() *5);
        const toppings = Math.floor(0 + Math.random() *4);
        const Price = Math.floor(diameter + (toppings*5))
        return new Pizza(diameter, slices, toppings, Price)
    }


    getPizza(){
        const arr = new Array<Pizza>();
        for (let i=0; i<100; i++){
            arr.push(this.getNewPizza())
        }

        return arr;
    }
}