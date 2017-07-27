// My solution to HackerRank Simple Array Sum
// Given an array of  integers, can you find the sum of its elements?

// Input Format

// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers representing the array's elements.

// Output Format

// Print the sum of the array's elements as a single integer.

// Sample Input

// 6
// 1 2 3 4 10 11

// Sample Output

// 31
  
var n = 6;
var ar = [1,2,3,4,10,11];

function addNumbers (){
  var res = 0;
  for(var i = 0; i < n; i++){
    res += ar[i];
  }
  return res;
}
console.log(addNumbers());