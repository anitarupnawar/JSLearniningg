//Assignment1

function greaterNumber(num1, num2) {
    var result=  num1>num2 ? num1 : num2;
   console.log(`Greater number amongst ${num1},  ${num2} is: ${result}`);
   }
   greaterNumber (10, -10);
   greaterNumber (800, 899);
   
   //Assignment2
   
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
   
   //Assignment3
   
   function wordLength(word) {
    var wordLength =  word.length;
    var result = wordLength%2==0 ? "Even" : "Odd";
   return result;
   }
   var result = wordLength ("Javascript");
   console.log(`word 'Javascript' has length : ${result}`);
   var result = wordLength ("developer");
   console.log(`word 'developer' has length : ${result}`);
   var result = wordLength ("Google");
   console.log(`word 'Google' has length : ${result}`);


   //AssignmentB-01

function tcsInterviewCheck(gradScore, hscScore, sscScore, candidateName){
     
    var result = (gradScore>=70 || hscScore>=80 || sscScore>90)  //True || True || false 
    ? `Congrats's ${candidateName} you are eligible for TCS interview`
     : `Unfortunately you are not eligible for interview`;
  console.log(result);
 }
 tcsInterviewCheck(80, 86, 90, "Billgates");