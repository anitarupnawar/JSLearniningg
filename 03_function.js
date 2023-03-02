
var num1 = 100;
var num2 = 200;

var str1 ="Sweety";  //cutey
var str2 ="Cutey";   //sweety

function swapVariables(value1, value2) {
    
    console.log("Before Swap: ", value1, value2);
    var temp =value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: " , value1, value2);
}
swapVariables(num1, num2); // Function call or Function invoke

swapVariables(str1, str2);

