
function funName (arg1, arg2, arg3) {
var add = arg1 + arg2 + arg3;
console.log(`Addition is: ${add}`);
return add;
}
funName (10,20,30);


function addFun (num1, num2){
 var add =num1 +num2;
return add;
}
var sum = addFun(20,30);
console.log(`Addition of 20 and 30 is ${sum}`);

//Above code is function with arguments & Return value



function greaterNumber(num1, num2) {
 var result=  num1>num2 ? num1 : num2;
console.log(`Greater number amongst ${num1},  ${num2} is: ${result}`);
}
greaterNumber (10, -10);
greaterNumber (800, 899);

console.log("======isEvenOrOddNum()=======");

function isEvenOrOddNum(num) {
console.log(num%2);
}
isEvenOrOddNum(29);


console.log("======isEvenOrOddNum()=======");

function isEvenOrOddNum(num) {
var result = num%2==0 ? True : false
return result;
}
var result = isEvenOrOddNum(29);
console.log(`29 Is even or odd -->True -even ,False -odd: ${result}`);