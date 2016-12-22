// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


//String.prototype.substring();  The substring() method returns a subset of a string between one index and another, or through the end of the string.

//str.substring(indexStart[, indexEnd])

//indexStart is an integer between 0 and the length of the string, specifying the offset("the amount or distance by which something is out of line.") into the string of the first character to include in the returned substring.

//indexEnd is an integer between 0 and the length of the string, which specifies the offset into the string of the first character not to include in the returned substring.

var str = 'Mozilla';
console.log(str.substring(0, 3)); //e.g.


function confirmEnding(str, target) {
  if (str.substring(str.length, str.length-1 ) === target){
    console.log("Yes, " + str + " ends with " + target)
  } else {
    console.log ("The last letter in " + str + "is not " + target );  
  }
  return str;
}

confirmEnding("Bastian", "n");