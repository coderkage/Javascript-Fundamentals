/* implicit type conversion : type cercion */

console.log(3+2);
console.log(3+"2");
console.log("3"+2);
console.log("3"+"2");

console.log(3*"2");
console.log("3"*2);

console.log(3+"hi");
console.log(3*"hi");

/* explicit type conversion : type casting */

let x = 15;
console.log(x, typeof x);
let y = String(x);
console.log(y, typeof y);
let z = Boolean(y);
console.log(z, typeof z);
