//Functions


function printHello(): void{

    console.log("Hello");

}

printHello();

function log(msg: string): void{

    console.log(msg);
}


log("Hello Message");


function greet(name: string): string{

    return `Hello, ${name}!`;
}

let nameFunc = greet("Rahul");
console.log(nameFunc);

//name: string --> the parameter must be a string
//:string after the parantheses - the function returns a string


function addition(a: number, b: number): number{

    return a + b;
}


let newSum = addition(10,20);
console.log(newSum);

//Optional parameters: Use ? to make a parameter optional

function welcome(name: string, age?: number): string{

    return age? `Hello, ${name}, age ${age}` : `Hello, ${name}`;
}


let newText = welcome("Rahul")
console.log(newText)


let newText1 = welcome("Rahul",30)
console.log(newText1)


//arrow functions

const multiplyarrow = (x: number, y: number): number => x * y;


let result = multiplyarrow(10,10)
console.log(result)


//function overloading

function combine(a: string, b:string): string;
function combine(a: number, b:number): number;
function combine(a: number, b:string): string;
function combine(a: number, b:number, c?:string): string;
function combine(a: any,  b:any): any{

    return a + b;
}

combine("Rahul","Arora");
combine(1,10);
combine(1,1,"Rahul")
combine(1,10,"Rahul")
