
function exeOperation(func?: Function, ...rest:number[]){
    let sum:number = 0;
    if(!func) func = Math.floor;
    for(let i=0; i<rest.length; i++) sum += func(rest[i]);
    return sum;
}

let pow : Function = function(a:number){return Math.pow(a,2)};
let defualt_test: number[] = [8.5,7.9,3.1]
let pow_test: number[] = [4,7,8]
console.log(exeOperation( undefined, ...defualt_test))
console.log(exeOperation( pow, ...pow_test))
