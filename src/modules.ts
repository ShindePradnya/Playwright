/*

What are Modules?

Modules are individual files in Typescript. Anything declared in one module is scoped to 
that file only unless explicitly exported

*/

import { Employee,adding,something } from "./oops";

const p1 = new Employee("Rahul",30);
p1.welcome();
console.log(p1.greet());
let final = p1.add(10,20);
console.log(final)

adding(10,20);
console.log(something);