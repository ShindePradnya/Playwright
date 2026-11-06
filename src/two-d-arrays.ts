//create a 2X3 2D array

const myArray: number[][] = [

    [10,11,12],
    [13,14,15]

];

//accessing any specific element
console.log(myArray[1][1]);

//getting the number of rows
console.log(myArray.length);


//iterate through the 2D array


for(let i=0; i<myArray.length; i++){
    for(let j=0; j<myArray[i].length; j++){

        console.log(myArray[i][j]+" ");
    }
    console.log();

}