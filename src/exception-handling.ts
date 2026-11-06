//Exception Handling

/*

try - A block of code where exceptions can occur.
catch - A block of code to handle the exception
finally - A block of code that will always execute
throw - A statement to explicitly throw an exception



*/

class Exceptions{


    static validateNumber(number: number): void{

        if(number < 0){

            throw new Error("Number must be non-negative");
        }


    }



    static main(): void{

        try{
            this.validateNumber(-1);

        }catch(e: any){

            console.log("Validation error: "+e.message);
        }
        

        

        try{
            const numbers = [1,2,3,4,5];
            console.log(numbers[6].toString());
            console.log("Hello");

        }catch(e: any){
            console.log("An error occurred in the array index: "+e.message);
        }



        try{

            const a = 10;
            const b = 0;
            const result = a/b; //gives to infinity

            if(!isFinite(result)){

                throw new Error("Division by ZERO is not allowed");
                
            }

        }catch(e: any){

            console.log("An Error occurred: "+e.message);

        } finally{

            console.log("This will always be executed.");
        }


    }




}

Exceptions.main();