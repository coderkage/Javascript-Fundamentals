console.log("Welcome to amazon online shopping!!")

/* if-else statement */

let amount = 1500;
console.log("your total amount is", amount);

let discount = 0;
if(amount >= 1000){
    discount = 0.1*amount;
}
else if(amount >= 500){
    discount = 0.05*amount;
}
else{
    discount = 0;
}

console.log("you get", discount, "rs. discount and your final amount is", amount-discount);

/* switch statement */

let shippingMode = "express";

switch(shippingMode){

    case "standard":
        console.log("your package will be delivered in 3-5 business days");
        break;
    
    case "express":
        console.log("your package will be delivered in 2-3 business days");
        break;

    case "one-day":
        console.log("your package will be delivered in 1 business day");
        break;

    default:
        console.log("invalid shipping option!");
        break;
}