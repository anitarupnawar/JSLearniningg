
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