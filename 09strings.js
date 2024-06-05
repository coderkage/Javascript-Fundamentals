// can use single ' ', double " ", and back ` ` quotes to assign a string

console.log("This is a string!");

let a = 'single';
let b = "double";
let c = `back`;

console.log(a,b,c);

for(let i=0; i<a.length;i++){
    console.log(a[i]);
}

// another method
console.log(a.charAt(2));

let intro = "Hi my name is Deep. \
I'm a student at IIIT Raichur. \
This is a multiline string. again Raichur ";

console.log(intro);

// concatnation

let s1 = "Deep", s2 = "Patel";

let s3 = s1+s2;
let s4 = `${s1}${s2}`; // use back quotes only

console.log(s3);
console.log(s4);

let s5 = 20;
let s6 = `My name is ${s1} ${s2} and my age is ${s5}.`;
console.log(s6);

// case

console.log(intro.toLowerCase());
console.log(intro.toUpperCase());

console.log("hi"=="HI");

// search

let keyword = "Raichur";

// in-build function : Finds only the first instance

console.log(intro.search(keyword));

// hand-written function : Finds all instances

function find(intro, keyword) {
    let introLength = intro.length;
    let keywordLength = keyword.length;

    for (let i = 0; i <= introLength - keywordLength; i++) {
        let j = 0;
        
        // Check if keyword matches intro starting from position i
        while (j < keywordLength && intro[i + j] === keyword[j]) {
            j++;
        }
        
        // If the entire keyword was found
        if (j === keywordLength) {
            console.log(i);
        }
    }
}

console.log(find(intro, keyword));

// replace

console.log(intro.replace("Deep", "Prayas"));

let d = "Deep";
let s = "Shivanshu";

console.log(intro.replace(d,s));

// substring

let sub = intro.slice(3,10);
console.log(sub);

let part = intro.slice(15); //start from 15th index
console.log(part);

let rev = intro.slice(-30);
console.log(rev);

let sub1 = intro.substring(3,10);
console.log(sub1);

let part1 = intro.substring(15); //start from 15th index
console.log(part1);

let rev1 = intro.substring(-30); //will take -ve value as 0
console.log(rev1);