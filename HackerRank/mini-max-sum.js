// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Input Format

// A single line of five space-separated integers.

// Constraints

// Each integer is in the inclusive range .
// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

//Here I declare all the variables I need
var arr = [10,2,23,4,5];
var count = 0;
var fourSums = [];

//this set of variables will get the values assigned for each index in the array
var firstValue;
var secondValue;
var thirdValue;
var fourthValue;
//the position in the array will shift to the right in each iteration.
var firstPosition = 0;
var secondPosition = 1;
var thirdPosition = 2;
var fourthPosition = 3;

//my idea is to first make the original array twice as long so we later go over five groups. 
function swapNums(){
  for (var i = 0; i < 5; i++){
  var swapMe = arr[i];
  arr.splice(5+count,0,swapMe);
    count++;
}
  console.log(arr)
}
swapNums();
//this function iterates over the "expanded" array and assigns each position value and passes the current values to the sums function to be added
function getValuesandAdd(){
  for(var i = 0; i < 5; i++){
    firstValue = arr[firstPosition];
    secondValue = arr[secondPosition];
    thirdValue = arr[thirdPosition];
    fourthValue = arr[fourthPosition];
    sums(firstValue, secondValue, thirdValue, fourthValue);
    firstPosition++;  secondPosition++;  thirdPosition++; fourthPosition++;
  }
}

//here we add the current values; each sum is pushed to the fourSums array
function sums(firstValue, secondValue, thirdValue, fourthValue){
 var res =  firstValue+secondValue+thirdValue+fourthValue;
  fourSums.push(res);
  console.log(fourSums);
}

getValuesandAdd();

//finally we show only the highest ans lowest values on the fourSums array
console.log(Math.min(...fourSums)+"  "+Math.max(...fourSums));

  
