//We need to store Prashant Deshmukh info 

let firstName = "Prashant";
let lastName =  "Deshmukh";
let isWorking = true;
let age =22;
let collageName = "ABC";
let id = 12345;

let student = {
   firstName: "Prashant",
    lastName : "Deshmukh",
    isWorking: "true",
    age : 22,
    collageName: "ABC",
    id : "12345",
  address: {
     street: "Wakad",
    city:"Pune",
    PIN: "413109"

}

};
console.log(student.address.city);
console.log(student);
console.log(typeof student);
//. Dot notation
console.log(student.firstName);

// [] notation
console.log(student["lastName"]);

// Example 2 - Update Property

student.collageName ="COEP PUNE";

console.log("student.age");

// Example 3- Add new property city = "Mumbai"
student.city = "Mumbai";
console.table(student);

// Example 4- add new property country = "India"
student.country = "India";
console.table(student);

//Example 5- delete the property
delete student.isWorking;
console.table(student);

//Creating Empty object

