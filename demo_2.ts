//?Basic Operators
let x = 5 + 4;
let y = 5 - 4;
let z = 5 * 4;
let w = 5 / 4;
let a = 5 % 4;
let b = 5 ** 4;
let c = x++; //? x++ is the same as x = x + 1
let d = y--;//? y-- is the same as y = y - 1

let array = [x, y, z, w, a, b, c, d];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(true && false);//&& is and
console.log(true || false);//|| is or