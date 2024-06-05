/* global scope vs block scope vs function scope */

/*
let => block scope
var => function scope
const => block scope
*/

let g = 1000; //global scope

function scope1(){
    let a = "a";
    var b = "b";
    const c = "c";

    if(true){
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(g);
    }
}

function scope2(){

    if(true){
        let a = "a";
        var b = "b";
        const c = "c";
        
    }
    // console.log(a); ReferenceError: a is not defined
    console.log(b);
    // console.log(c); ReferenceError: c is not defined
    console.log(g);

}

scope1();
scope2();