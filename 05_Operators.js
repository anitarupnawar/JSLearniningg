
console.log(`===Arithmetic Oprataors===`);
var num1 = 10;
var num2 = 20;
 var result= num1 + num2; //Addition
 console.log(`Addition is ${result}`);

 var num1 = 40;
 var num2 = 30;
 var result= num1 - num2; //Subtraction
 console.log(`Subtraction is ${result}`);

 var result= num1 * num2; //Multiflication
 console.log(`Multification is ${result}`);

 var result= num1 / num2; //Dividation
 console.log(`Dividation is ${result}`);

 var result= num1 ** num2; //Exponential
 console.log(`Exponential is ${result}`);

 console.log(10/3);  // Divide operator
 console.log(10%3);    //Modulus operator
 console.log(11%3);  //Modulus operator
 console.log(15%3);   //Modulus operator

 var result =num1/3;
 console.log(`Modulus/Remindar is ${result}`);

 var num = 10 ;   //Compound addition +=
 num+=20; // num = num + 20
 console.log(`Compound addition += ${num}`);


 var num = 10 ;   //Compound Subtraction -=
 num-=20; // num = num - 20
 console.log(`Compound Subtraction -= ${num}`);

 var num =10;  //Compound Multification *=
 num*=20;  // num =num*20
 console.log(`Compound Multification *= ${num}`) ;


 var num =10;  //Compound Dividation /=
 num/=20;  // num =num/20
 console.log(`Compound Dividation /= ${num}`) ;


 console.log(`Comparison Operator`);

 var num3 = 10;
 console.log(num3==10);
 console.log(num3==11);

 var num3 = 10;
 console.log(num3===10);
 console.log(num3===11);


 console.log(`Comparison Operator`);
 var num3 = "10";
 var num4 = 10;
 console.log(num3==num4);  //10==10
 console.log(num3===num4);    //stricatlly value

console.log(num3 != num4);   // ! Not

console.log( 10 > 20);  // > Greater Than

console.log(20 < 10); // < less than

console.log(10 < 10); // < less than

var marks =35;
console.log(marks >= 35);   // > Greater than equal
//Is marks greater than 35
//Is marks greater than equal 35


// < Less than equal
var marks =35;
console.log(marks <= 35);   // < less than equal

// Ternary Operators

var marks =70;
 var result =marks >=60 ? "Allow him for interview" : "Don't Allow";
console.log(result);

 var age =22;
 var result =age >=21 ?" Congrtualtions..": "Ha haa no next time...";
 console.log(result);

 console.log("Even or Odd");
var myNumber =7;
// Even -Divide by 2 & reminder is 0
var result = myNumber%2 == 0 ? "EVEN": "ODD";
console.log(result);

var num1 =10;
var num2 =12;
var result = num1 > num2 ? num1 : num2;
console.log(result);


//Assignement 

function maleMarriageEligibilty(gender, age, boyName){
var result = gender=="Male" && age>=21 ?`Hey ${boyName} you are eligible for marriage`: "No try next time";
return result;
}
var result = maleMarriageEligibilty("Male", 25, "Billgates");
console.log(result);
