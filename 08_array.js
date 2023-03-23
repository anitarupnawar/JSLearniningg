// Example 1
let arrayOfNumbers = [0, 2, 4, 5, 6, 7, 8, "Nine", "Ten"];
console.log(arrayOfNumbers);
console.table(arrayOfNumbers);
console.log(arrayOfNumbers.length);
const totalArrayElements = arrayOfNumbers.length
console.log(`Total elements available in array is ${totalArrayElements}`);


//Example 2

const is8Available = arrayOfNumbers.includes(8);
console.log(`Is 8 available : ${is8Available}`);

const is11Available = arrayOfNumbers.includes(11);
console.log(`Is 11 available : ${is11Available}`);

const is100Available = arrayOfNumbers.includes(100);
console.log(`Is 100 available : ${is100Available}`);

//Example 3

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 elements is:${indexOf100}`);

 arrayOfNumbers = [10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`);

arrayOfNumbers[3] = 35;
console.log(arrayOfNumbers);

arrayOfNumbers[1] =20;
const valueAtIndex1 = arrayOfNumbers [1];
console.log('value at index 1 is : ${valueAtIndex1}');

arrayOfNumbers = [10, 20, 25, 15, 30, 5];
console.log("=====Adding element in the last using push() =====");
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);

console.log("=====Adding element in the first using unshift() =====");
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

console.log("=====Removing last element using pop() =====");
arrayOfNumbers.pop(5);
console.log(arrayOfNumbers);

console.log("=====Removing first element using shift() =====");
arrayOfNumbers.shift(5);
console.log(arrayOfNumbers);

//Example 4 - Slice method

arrayOfNumbers = [10, 20, 25, 15, ,30, 5, 40, 45];
console.log("=== slice(startIndex) ===");
const arrayFromIndex3 = arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

console.log("=== slice(startIndex, endIndex) ===");
const subArray = arrayOfNumbers.slice(2, 5);
console.log(subArray);

//Example 5 - Splice method

arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log("=== splice(startIndex) ===");
const splicedArray = arrayOfNumbers.splice(3);
console.log(splicedArray);
console.log(arrayOfNumbers);

arrayOfNumbers = [10,20,25,15, 40,45];
//Delete the element 20
arrayOfNumbers.splice(1,1);
console.log(arrayOfNumbers);

//Example 6

console.log("=== splice()to insert one elements without replacing existing elements ===");
 arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice (4, 0, 5, 35, 55 );
console.log(arrayOfNumbers);


//Traversing Array

console.log("=== Traversing ===");
arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];
let sum = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    sum = sum + element;
}
console.log(`Sum of an Array element is: ${sum}`);