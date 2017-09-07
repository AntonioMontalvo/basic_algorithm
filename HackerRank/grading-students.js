// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100 .
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each
// student's  according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3 ,
//  round grade up to the next multiple of 5 .
// If the value of grade is less than 38 , no rounding occurs as the result will 
// still be a failing grade.
// Input Format

// The first line contains a single integer denoting n (the number of students). 
// Each line i  of the n  subsequent lines contains a single integer, grade i , denoting student i's grade.

// For each  of the  grades, print the rounded grade on a new line
// Sample Input 0

// 4
// 73
// 67
// 38
// 33
// Sample Output 0

// 75
// 67
// 40
// 33

//////////////////////////
//     My Solution      //
//////////////////////////

var grades = [73,67,38,33, 44, 99, 2];
var finalGrades = [];

//we need to convert any number to next multiple of  5. 
//To do this we divide the number by 5. The result is then rounded up to 
//the smallest integer greater than or equal to a given number.
function roundUpToNextMultipleOfFive(n){
  var res = Math.ceil(n/5)*5;
  return res;
}


function solve(grades){

    for(var i = 0; i < grades.length; i++){
      var roundedUp = roundUpToNextMultipleOfFive(grades[i]);
      var res;
      var failGrade;
      if(grades[i] >= 38){
        if((roundedUp - grades[i]) < 3 ){
          res = roundedUp
        } else {
          res = grades[i]; 
        }
        finalGrades.push(res);
      } 
      if(grades[i] < 38){
        failGrade = grades[i];
        finalGrades.push(failGrade);
      }
   }
  console.log(finalGrades);
  return finalGrades;
}

solve(grades);
