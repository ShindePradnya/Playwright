/*   Operators

Operators are special symbers or keywords used to perform operations on variables and values.
Typescript supports the full range of js operators, along with the benefit of static typing

categories of Operators


Arithmetic  - Basic math operation
Assignment - Assign values to variables
Comparison - compare the values
Logical - combine or invert conditions
Bitwise - 
Unary - Operate on a single operand
Ternary - Short form of if-else
Type - Type-checking and type assertion in TS



*/




//1. Arithmetic Operators


let a = 10;
let b = 5;


console.log(a + b); //15
console.log(a - b); //5
console.log(a * b); //50
console.log(a / b); //2
console.log(a % b); //0

//2. Assignment Operators


let y = 5;

y +=3; // same as y = y + 3
console.log(y);
y -=3; // y = y - 3
console.log(y);



//3. Comparison (Relational) Operator

console.log(5 > 3); //true
console.log(5 < 3); //false
//console.log(5==='5');
//console.log(5 !== 6);

const f: number = 5;
const g: number = 6;
console.log(f !==g);
console.log((5 as number) !== (6 as number));


// Logical Operator

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin)// false
console.log(isLoggedIn || isAdmin)// true
console.log(!isAdmin); //true


//Unary Operators - Operators on a single operand

let ab = 5;
console.log(-ab); //-5

let ba = true;
console.log(!ba) //false

let ca = 10;
console.log(ca++); //11 //post-increment
console.log(ca);
console.log(ca--); //10
console.log(ca);
console.log(--ca);
console.log(ca);
console.log(++ca); //pre-increment
console.log(ca);


//Ternary Operator

let newAge = 20;
let newResult = newAge >=18 ? "Adult" : "Minor";
console.log(newResult);

//Type Operartor - as, typeof, instanceof


let str = "Hello";
console.log(typeof str); //string

class Dog{}

const d = new Dog();

console.log(d instanceof Dog);//true



