/*

What is an Object?
An Object in Typescript is a collection of key-value pairs(properties), where each key is a string
and each value can be of any type

Objects can also include methods, which are functions associated with the object.


*/



let emp_details = {


    name:"Rahul",
    age:30,
    isDeveloper: true
};

console.log(emp_details.name);


let emp_new:{

    name: string,
    age: number,
    isDeveloper: boolean
} = {

    name: "Rahul",
    age: 30,
    isDeveloper: true
};

//Objects with Methods


let car = {


    brand: "BMW",
    speed: 200,
    drive(): string{
        return "Driving very fast!";
    }
};

console.log(car.drive());


//Merge Objects

let obj1 = {name: "Rahul", age: 30};
let obj2 = {role: "Developer", country: "India"};


let merged = {...obj1,...obj2}

console.log(merged);
console.log(merged.name);