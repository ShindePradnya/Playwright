//if else - switch case


/*syntax

if(false){


}else if(true){


}else{


}*/


const randNumber = Math.floor(Math.random() * 5) //generate a number between 0 to 4
console.log(randNumber)

/*
if(randNumber > 3){

    console.log(`${randNumber} is greater than 3`)
}else{
    console.log(`${randNumber} is less than or equal to 3`)
}*/
/*

if(randNumber === 0){

    console.log("Number is ZERO : "+randNumber);
}else if(randNumber === 1){

    console.log("Number is ONE : "+randNumber);
}else if(randNumber === 2){

    console.log("Number is TWO : "+randNumber);
}else{

    console.log("Number is either THREE or FOUR: "+randNumber)
}*/


//switch-case example

switch (randNumber){
    case 0:
        console.log("Number is ZERO: "+randNumber)
        break;
    case 1:
        console.log("Number is ONE: "+randNumber)
        break;
    case 2:
        console.log("Number is TWO: "+randNumber)
        break;
    default:
        console.log("Number is either THREE or FOUR: "+randNumber)
        break;


}