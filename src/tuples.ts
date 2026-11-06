/*

What are Tuples?

a Tuple is a fixed-length, ordered array where each element can have a different type.
Unlike regular arrays that allow multiple values of the same type,
tuples let you define the exact type and number of elements.


*/




let employee: [number,string] = [101,"Rahul"];
console.log(employee[0]); //101
console.log(employee[1]); //Rahul


//Tuple with Optional Elements

let data1: [string, number?] = ["Test"];


//Tuple with Spread
let rgb: [number,number,number,...string[]] = [255,0,0,"Red","Bright","Dark"]
console.log(rgb[3]);

//Merge two tuples

let tuple1: [string,number] = ["Rahul",30];
let tuple2: [boolean,string] = [true,"India"];

let mergeTuple = [...tuple1,...tuple2];
console.log(mergeTuple);
console.log(mergeTuple[2]);