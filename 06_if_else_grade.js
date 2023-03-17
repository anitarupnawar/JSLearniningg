
function gradeCalculation(marks) {
 // if marks is 0 0r less than 0 or greater than 100 or not in valid number format
 //ex. "56" or "seventy" then log the msg -please provide the valid mark

if (marks <=0 || marks > 100 || (typeof marks!="number") || isNaN (marks)) {

    console.log(`Please provide the valid mark - ${marks}`);
}  
}
else {

    if (marks>=90) {
        console.log(`Excellent marks`);
    }
    if (marks>=75 && marks <90) {
        console.log(`Good marks`);
    }

    if (marks>=50 && marks <75) {
        console.log(`Ok marks`);
}
if (marks>=35 && marks <50) {
    console.log(`Need Improvements`);
}
}


gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation("91");
gradeCalculation("Seventy one");
gradeCalculation(NaN);
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(96);
gradeCalculation(80);
gradeCalculation(60);
gradeCalculation(36);