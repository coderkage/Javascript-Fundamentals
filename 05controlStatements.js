console.log("Hello!");

/* for loop */

let n = 5;
for(i=1;i<n;i++){
    console.log("hi");
}

let items = [10,20,30,40,50];
let total = 0;
for(i=0;i<items.length;i++){
    total += items[i];
}

console.log(total);

/* while loop */

let k = items.length;
let totalAmount = 0;
while(k--){

    totalAmount += items[k];

}


console.log(totalAmount);