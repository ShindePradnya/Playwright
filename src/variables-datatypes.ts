/*
----Naming Conventions to follow-----
File name - kebab-case intro-typescritp.ts
Class name - PascalCase - LoginTest.ts
Function name - camelCase - getUserDetails()
Variable name - camelCase userName
Constant name UPPER_CASE NO_OF_USERS
*/

//Variables - let, const or var

let age: number = 30;
let firstName: string = "Rahul";
let isActive: boolean = true;

let city = "Delhi";

//city = 123;


/*
common types


string "hello",'hi'
boolean true, false
any - let x: unknown = "hello"

unknown

null / undefined - absence value

object {name: "Rahul"}

array string[], number[]


*/

//special types

let data: any = "Hello";

data = 100; 

let value: unknown = "test"

if (typeof value === "string"){
    console.log(value.toUpperCase());
}

// = assignment operator, == Equality Operator, === Strict Equality Operator

// == 1==='1' //true


//1===1

const person = {name: "Rahul"};

person.name = "Raman";

//person = {};


//Union Types: Let a variable hold more than one type:

let x: string | number;

x = "Rahul";
x = 123;


//Arrays - Two ways to declare arrays:

let number: number[] = [1,2,3,4,5]
let names: Array<string> = ["Rahul","Raman"]

//Tuple - Fixed-length arrays with speciic types at each position:


let user: [string,number] = ["Rahul",30];


//Enums - Used to define a set of named constants



enum Direction{

    Up,
    Down,
    Left,
    Right,

}

let move: Direction = Direction.Up;



//Object: Define object structures using types


let people: {name: string; age: number} = {

    name: "Rahul",
    age: 30,
}
