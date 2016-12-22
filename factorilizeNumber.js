// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


function factorialize(num) {
  var result = 1;
  for ( var i = 1; i <= num; i++){
    result *= i;
  }
  console.log(result);
  return result;
}

factorialize(4);

//the idea is: the first iteration the value of result is 1 and it's multiply by the value of i which is also 1. 
//The second time i is 2 and result is 1, so we multiply both and store it in result.
//The third time i is 3 and result is 2, so we get 6 and store it in result
//The fourth time i is 4 and result is 6 so we get 24 
//the fifth time the loop doesn't run so we exit the loop and return result which is 24. 
