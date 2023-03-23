// Example 1 // Write a program  to print numbers from 0 to 10

var index=0; //Initilazation 
while (index<=10) {  //Condition
    console.log(index);
    index++; //Update Expression
}

//Example 2
const arrayOfNumbers= [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];

var index=0; //Initilazation 
while (index<arrayOfNumbers.length) {  //Condition
    console.log(arrayOfNumbers[index]);
    index++; //Update Expression
}

//Example 3 - 

console.log("Even Numbers");
var index=0; //Initilazation 
let sum =0;
while (index<arrayOfNumbers.length) {  //Condition
    const element = arrayOfNumbers[index];
    if (element%2==0) {
        console.log(element);
        sum = sum + element;
    }
    index++; //Update Expression
}
