// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Input Format

// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers describing an array of numbers .

// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeroes in the array compared to its size.
// Sample Input

// 6
// -4 3 -9 0 4 1         
// Sample Output

// 0.500000
// 0.333333
// 0.166667


var n = 7;
var array = [2,-5,0,0,10,3,-3];

var positive = [];
var negative = [];
var zeroes = [];

function posNegZer(n){
  for(var i = 0; i <n; i++){
    if (array[i] > 0){
      positive.push(array[i]);
    }
    if (array[i] < 0){
      negative.push(array[i]);
    }
    if (array[i] == 0){
      zeroes.push(array[i]);
    }
  }
}

posNegZer(n);


(function calculateFractions(){
  
  var positiveFraction = positive.length/n;
  var negativeFraction = negative.length/n;
  var zeroesFraction = zeroes.length/n;
  console.log(positiveFraction.toFixed(4));
  console.log(negativeFraction.toFixed(4));
  console.log(zeroesFraction.toFixed(4));
})();