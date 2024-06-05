let student = {
    name : "Deep",
    rollNo : 8,
    age : 20,
    branch : "CSE",
    isGraduate : false,
    backlogs : null,
    grades : [10, 10, 10, 10, 10, 8],
    fun : function(){
        console.log("This is a function within an object!")
    },
    address : {         //nested object
        plot : "513/1",
        landMark : "ch-2 circle",
        pincode : 382007,
        city : "Gandhinagar"
    } 
}

console.log(student.name);
console.log(student.rollNo);
console.log(student.grades);
console.log(student.fun());

// update

console.log(student.isGraduate);
student.isGraduate = true;

console.log(student.isGraduate);

// insert

student.isMarried = false;
console.log(student);

// square notation

let key = "age";
console.log(student[key]);

// print all attributes

for (let attr in student){
    console.log(attr);
}

// print all values

for (let val in student){
    console.log(student[val]);
}

// nested object

console.log(student.address.city);