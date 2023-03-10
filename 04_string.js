var greet = "Good Morning";
console.log(typeof greet);

console.log(" Total number chars available into this string variable - greet ");
var greetLength = greet.length;
console.log(greetLength);

console.log("Find the character by index value");
var charAtIndex3 = greet.charAt(3);
console.log("character available at index 3 is: ", charAtIndex3);

console.log("Find the last charater");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last char is:" , charAtLastIndex);

console.log("Find the index by character value");
var indexOfM= greet.indexOf ('M');
console.log("Index of char M is: " , indexOfM);


console.log("Index of char which is not available into the string: " , greet.indexOf('z'));

console.log("Index of o char: " , greet.indexOf('O'));
console.log("Index of o char using lastIndexOf(): " , greet.lastIndexOf('O'));

greet.replace("Morning" ,"Evening");
console.log(greet);

var replaceResult = greet.replace("Morning" ,"Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case:",replaceResult.toUpperCase() );
console.log("Upper Case:",replaceResult.toLowerCase() );

var myName = "  Anita Rupnawar  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim():" ,myNameAfterTrim,myName.length, myNameAfterTrim.length);


//Find the total extra spaces removed from the string -myName

var count = myName.length -myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(),myName.trimEnd());

console.log("includes()");
console.log("Is substring Mor includes in the greet or not:" , greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not:" , greet.includes("Mor"));
console.log("Is substring o includes in the greet or not:" , greet.includes("o"));

console.log("slice() method");
var sliceResult = greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,5).length);

console.log("split() method");
var greet = " Good Morning my dear freind";
var splitResult =greet.split(" ");
console.log(splitResult);
console.log("Total words: " , splitResult.length);

var myFreindList ="Billgates, Samar, Praju, Elon Musk, Narayn Murti, Nadan Nilekani, Larry Page, Tim Cook";
var freindList =myFreindList.split( " ");
console.log(freindList.length);
console.log("Total words: " , myFreindList.length);