let hello = ()=>console.log("Hello World!"); //single line function

/* same as : 
    function hello(){
        console.log("Hello World!");
    }
*/
let world = ()=>{                           //multiple line function
    for(let i=0; i<5;i++){
        console.log("New World🌎");
    }
}

console.log(hello);
hello();
console.log(world);
world();

// passing arguments

let sum = (a,b,c)=> a+b+c;

let ans = sum(10,20,30);
console.log(ans);

// Immediately Invoke Function Expression (IIFE)

(function(){
    console.log(4+9);
})();

//arrow function

(() =>console.log("Huh"))();