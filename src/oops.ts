/*

Classes and OOPS

Classes
Access Modifiers (public, private, protected)
Export (how to access classes/functions in a different file)
Inheritance
Abstract classes
Interface

A Class in Typescript is a blueprint for creating objects with properties (data) and methods (functions).


*/

export function adding(a: number, b: number): number{

    return a+b;
}

export const something: number = 123;

export class Employee{

    emp_name: string; //instance variable
    age: number;

    constructor(emp_name: string, age: number){
        this.emp_name = emp_name;
        this.age = age;

    }

    welcome(): void{

        console.log("Welcome the Employee");
    }

    add(a: number, b: number): number{

        return a+b;
    }


    greet(): string{

        return `Hello, I'm ${this.emp_name}`
    }

}

// const p1 = new Employee("Rahul",30);
// p1.welcome();
// console.log(p1.greet());
// let final = p1.add(10,20);
// console.log(final)