// normal function

function add(a, b){
    return console.log(a+b);
}

add(3,4)

// anonymous function

let sub = function(a,b){
    return console.log(a-b);
}

console.log(sub(10,7));

// higher order function : takes function as i/p or o/p

function mul(a,b){
    return console.log(a*b);
}

function higher(mul){
    mul();
}

function higher1(){
    return function mul(){
        return console.log(3*4);
    };
}

higher(function mul(){
    return console.log(3*4);
});

higher1();

let hi = higher1(function mul(){
    return console.log(3*4);
});
console.log(hi);
hi();

// or call twice
higher1()();