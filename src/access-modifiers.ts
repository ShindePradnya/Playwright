//Variable scope and access modifiers


class EmployeeDetails{

    public name: string; //instance, is accessed via instance of a class
    private salary: number;
    protected department: string;
    static message: string = "Welcome to the Organization"; //static variable, they belong to the class itself and not to the instance

    constructor(name: string, salary:number, department: string){

        this.name = name;
        this.salary = salary;
        this.department = department;
    }


    getSalaryDetails(): string{
        let emp_name = "Rahul"; //local variable
        return `${this.name}'s salary is ${this.salary},${emp_name}`;
    }




}



const ed = new EmployeeDetails("Rahul",100000,"Automation");
console.log(ed.name); //public access modifier can be accessed anywhere outside the class
console.log(EmployeeDetails.message);
//console.log(ed.salary); //private access modifier can be accessed within the class only
//console.log(ed.department)//protected access modifier can be accessed within the class and its subclasses
console.log(ed.getSalaryDetails());
