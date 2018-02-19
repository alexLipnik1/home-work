
export class Pizza {
    // constructor(public categoryID: number, public categoryName: string) { }
    constructor(public Diameter: number, public Slices: number, public Toppings: number, public Price: number) {
    }

    print(){
        return {
            diameter: this.Diameter,
            slices: this.Slices, 
            toppings: this.Toppings, 
            price: this.Price,
        };
    }
}


