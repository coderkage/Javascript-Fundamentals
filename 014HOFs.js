// for each loop

let numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach((number)=>{console.log(number)});

// why forEach(): it can access the element, index and whole array
// for example:

let students = ["Deep", "Prayas", "Shivanshu"];

students.forEach((student, index, students)=>{console.log(index, student, students)});

let list = [
    {id: 8, name: "Deep", branch: "CSE"},
    {id: 22, name: "Prayas", branch: "EE"},
    {id: 27, name: "Shivanshu", branch: "Mech"},
    {id: 19, name: "Piyush", branch: "Civil"},
    {id: 16, name: "Nirdesh", branch: "BioTech"}
]

list.forEach((student)=>{
    console.log(`Id: ${student.id}, Name: ${student.name}, Branch: ${student.branch}`);
});

// map

list.map((student)=>{
    console.log(`Id: ${student.id*2}`);
});
console.log(list);
// map will create a new aray and store the details and the operations will be performed on that array only
// map can also take 3 arguments


// filter
// returns a new array
let filter = list.filter((student)=>{
    return student.id>20;
});
console.log(filter);

// reduce
// will take 2 arguments : function and strating point

let total = list.reduce((total, student)=> {
    return total + student.id;
}, 0);
console.log(total);