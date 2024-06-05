/* properties:
1. dynamic
2. heterogeneous (can store multiple types of variables and functions in single array)
*/

let numbers =  [1,2,3,4,5,6];
let mix = [25, "hi", true, undefined, null, BigInt(7923165615486518), Symbol("bye"), {name : "Deep", score : 576}]

console.log(numbers);
console.log(mix);
console.log(mix[7].score);
console.log(mix.length);


var contestants = [
    {name : "Deep", roll : 8},
    {name : "Prayas", roll : 22},
    {name : "Piyush", roll : 19},
    {name : "Shivanshu", roll : 27},
    {name : "Nirdesh", roll : 16},
    {name : "Abhay", roll : 18}
]

console.log(contestants);

// adding more elements

contestants[6] = {name : "Priyansh", roll : 14};
console.log(contestants);

//add in begining

contestants.unshift({name : "Naman", roll : 14});
console.log(contestants);

// add from end

contestants.push({name : "Sanidhaya", roll : 24});
console.log(contestants);

//delete last element

contestants.pop();
console.log(contestants);

//delete any element

delete contestants[6];
console.log(contestants);

//delete from begining

contestants.shift();
console.log(contestants);


contestants[6000] = {name : "Priyansh", roll : 14};
console.log(contestants);


// slice

let students = [
    {name : "Deep", roll : 8},
    {name : "Prayas", roll : 22},
    {name : "Piyush", roll : 19},
    {name : "Shivanshu", roll : 27},
    {name : "Nirdesh", roll : 16},
    {name : "Abhay", roll : 18},
    {name : "Priyansh", roll : 14}
]

console.log(students);

let firstYears = students.slice(0, 5);
let secondYears = students.slice(5, 7);

console.log("first years",firstYears);
console.log("second years", secondYears);

let arr = students.slice(-2);

console.log(arr);

//splice

students.splice(2, 3, {name : "Sanidhaya", roll : 24});

console.log(students);

// reverse

console.log(students.reverse());

// some and every

let isMaj = students.some(
    function(obj){      // anonymous function since it is used in very small scope
            return obj.roll < 20;
    }
)

console.log(isMaj);

let isMin = students.every(
    function fun(obj){
            return obj.roll < 20;
    }
)

console.log(isMin);

// find

let info = students.find(function(obj){
    return obj.roll === 22;
})

console.log(info);

// sort

let array = [2, 5, 11, 70, 15, 30, 9];

console.log(array.sort()); // will sort in lexographical order

console.log(array.sort(function(a,b){return a-b;})); // will be sorted in ascending order

console.log(array.sort(function(a,b){return b-a;})); // will be sorted in descending order

// sort array on the basis of roll no.

let sortedRoll = students.sort(function(obj, obj1){return obj.roll - obj1.roll;});

console.log(sortedRoll);

let sortedName = students.sort(function(obj, obj1){if(obj.name > obj1.name){return 1;} else{return -1;};});

console.log(sortedName);

