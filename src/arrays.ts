/*

Arrays are hte collection of similar datatypes
Each variable in an array is also known as array element
Each variable of array is referenced by a particular integer number
which is also known as array index
The total number of variables in array decide the length of an array
The very first index or an array always starts from 0 and the last index is length-1
1D, 2D

*/

const array1: number[] = [1,2,3,4,5,6,7];

//console.log(array1.length);
//console.log(array1[4]);


const numbers: number[] = new Array(10);

/*
numbers[0] = 1;
numbers[2] = 2;
numbers[9] = 10;
*/

for(let i=0; i<numbers.length; i++){

    numbers[i] = Math.floor(Math.random()*100)+1;
   // console.log(numbers[i]);
}


for(const number of numbers){

    console.log(number);
}

console.log("----Printing reverse values from an array----");


for(let i=numbers.length-1; i>=0; i--){

    console.log(numbers[i])
}