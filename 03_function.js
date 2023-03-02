
var num1 = 100;
var num2 = 200;

var str1 ="Sweety";  //cutey
var str2 ="Cutey";   //sweety

var name1 ='Akshay';
var name2 = 'Sachin';

function swapVariables(value1, value2) {
    
    console.log("Before Swap: ", value1, value2);
    var temp =value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: " , value1, value2);
    return "Swapping variables sucessfully completed";
}
var swapResult = swapVariables(num1, num2); // Function call or Function invoke
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
 console.log(swapResult2);


 function display(num) {
  console.log(num);
  var result = typeof num;
  return result;
 }
var displayResult =  display(100);
console.log(displayResult); //



//function with no arguments and no return value
function showFullName(){

    console.log("My full name is: Anita Rupnawar");
}
    showFullName(); //Funcation call or invoke


    //function with arguments and no return value

    function showAge(age) {
        console.log("My Age is: 32");
}
    showAge(32);

    //function with no arguments and return value

    function fullName() {
        var name ="Anita Rupnawar";
        return name;
    }
    var fName = fullName ();
    console.log(fName);


    
    //function with arguments and return value

    function sumOfNumbers(num1, num2, num3) {
  var sum= num1 + num2 + num3;
  return sum;

    }
   var sumResult=  sumOfNumbers(100.05, 23,45);
   console.log(sumResult);

   var num1 = 100;
   var num2 = 200;
   
   var str1 ="Sweety";  //cutey
   var str2 ="Cutey";   //sweety
   
   var name1 ='Ramu';
   var name2 = 'Suraj';
   
   function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp =value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: " , value1, value2);
    return "Swapping variables sucessfully completed";
}
swapVariables();

var swapResult = swapVariables(num1, num2); // Function call or Function invoke
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
 console.log(swapResult2);