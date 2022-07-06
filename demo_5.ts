//? Basic function

/*----------------------------------------------------------------------*/

//? Void function is a function that doesn't return anything
function sayHello() {
    console.log("Hello");
}
sayHello();

/*----------------------------------------------------------------------*/

//? Return function is a function that returns something. 
//?In TypeScript, we can fix the return and parameter type of the function.
function calculate(num1: number, num2: number = 0): number{
    return num1 + num2;
}
let result = calculate(2, 3);
console.log(result);

let result2 = calculate(2);
console.log(result2); //? if we don't give a second parameter, it will take the default value of 0

/*----------------------------------------------------------------------*/

//?Rest parameter is a parameter that can take multiple arguments
function sum(num1: number, num2: number, ...rest: number[]): number{
    return num1 + num2 + rest.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));

/*----------------------------------------------------------------------*/

//? We can fix the name of the parameter.
function add({x, y}: {x: number, y: number}): number{
    return x + y;
}
let result3 = add({x: 1, y: 2});
console.log(result3);