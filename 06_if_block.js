
console.log(`Start`);
var num = 10;
if (num>0) {
console.log(`inside if`);
console.log(`Number is positive ${num}`);

}
console.log(`End`);


var ageForVote = 20;
if(ageForVote>=18){
console.log(`You are eligible for voting`);
console.log(`Age is : ${ageForVote}`);
}

console.log("End of next if block");

function checkEvenOdd (num){
if (num%2==0) {
    return "EVEN";
}
if (num%2!=0) {
return "ODD"
}
}
var result = checkEvenOdd(45);
console.log(`Given number 45 is ${result}`);
var result = checkEvenOdd(70);
console.log(`Given number 70 is ${result}`);
var result = checkEvenOdd(67);
console.log(`Given number 67 is ${result}`);
var result = checkEvenOdd(98);
console.log(`Given number 98 is ${result}`);


//if else condition

var num1 =5;
if (num1>0) {
    console.log(`Number ${num1} is positive`);
    } else {
        console.log(`Number ${num1} is negative`);
    }


    //Assignment

    function maleMarriageEligibility(gender, age, boyName) {
  if(gender=="Male" && age>=21) {
console.log("You are Eligible");
  } else{
    console.log("not eligible");
  }

    }
    maleMarriageEligibility("Male", 25, "Billgates");
    maleMarriageEligibility("Male", 20, "Anil");
