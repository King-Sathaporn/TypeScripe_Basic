//?Basic Decision

let x:number = 5;
let y:number = 4;

if(x > y) {
    console.log("x is greater than y");
}else{
    console.log("x is not greater than y");
}

//? ternary operator
x>y ? console.log("x is greater than y") : console.log("x is not greater than y");


let selectMenu : number = 1;

switch(selectMenu) {
    case 0:
        console.log("selectMenu = 0");
        break;
    case 1:
        console.log("selectMenu = 1");
        break;
    case 2:
        console.log("selectMenu = 2");
        break;
}

switch(selectMenu+1) {//? We can use operator in the switch condition.
    case 0:
        console.log("selectMenu = 0");
        break;
    case 1:
        console.log("selectMenu = 1");
        break;
    case 2:
        console.log("selectMenu = 2");
        break;
}