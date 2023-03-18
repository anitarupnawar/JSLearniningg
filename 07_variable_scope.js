//Example 1

var firstName;  //variable declaration
firstName = "Virat"; //variable Intilization

var lastName = "Kohli";  //variable declaration and Intilization
firstName ="King Kohli";   //variable update

//Example 2

var firstName; // variable re-declaration
console.log(firstName);

let city; //variable declaration
city = "Delhi"; //variable Intilization

//Example 3

const PI = 3.14;
// PI = 3.56;  //Update or modifed not allowed 
console.log(PI);
// const PI =3.1412;  // re-declaration of const variable is not allowed


//Example 4
var num = 10;
if (num==10){
var greet= "Recesion is the mother of Sucess";
}
console.log(greet);

//Example 5

function sayHi(arg) {
var greet ="Hi Good Morning";
if (arg%2==0) {
    var isEven = true;
    } else {
        var isEven = false;
    }
    return isEven;
}
let result = sayHi(10);
console.log(result);
// console.log(greet);


//Example 6

var fullName = "MS Dhoni";
if (false) {
    
} else {
    var age =37;
}
console.log(age);










