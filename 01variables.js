console.log("hi");
console.log("new line","bye",33);
console.log("33");

/* premetive data types */

let x = 5;
var y = 10;
const z = 15;

console.log(x,y,z);

let a = 15;
let b = "deep";
let c = true;
let d = null;
let e = undefined;
let f = BigInt(4987319879139879198);
let g = Symbol("hey");

console.log(a,b,c,d,e,f,g);
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g);

let name;
console.log(name);

/* non-premetive data types */

//objects

let person = {
    firstName : 'Deep',
    lastName : 'Patel',
    age : 20,
    branch : 'cse',
    garduate : false
} 

console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName, 'is', person.age, 'years old and he is in', person.branch, 'department.')

// update & add property

person.age += 1;
console.log(person.age);

person.institute = 'IIIT Raichur';
console.log(person);
