// var reverseStr = function(str){
// // var reverse ="";
//     for (let index = str.length -1 ; index >=0; index--) {
//         var charAt =str.charAt(index);
//         reverse = reverse + charAt;
//         }
//         return reverse;
// }
// var result = reverseStr("Do it anyhow");
// console.log(`Reverse last word : ${result}`);


//I am Angular champ

var str = "I am Angular champ"
var count =0;
for (let index =0 ; index < str.length; index++) {
    var char =str. charAt(index);
       if (char == " ") {
        count = count +1;
       }
    }
console.log ("Total number of space is :",count);


