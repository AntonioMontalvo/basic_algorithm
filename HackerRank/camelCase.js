// Alice wrote a sequence of words in CamelCase as a string of letters,"s" , having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given "s" , print the number of words in "s" on a new line.

// Input Format

// A single line containing string .



// Output Format

// Print the number of words in string "s" .

// Sample Input
// "saveChangesInTheEditor"
// saveChangesInTheEditor
// Sample Output
// 5

function main(s) {
  var res = s.match(/[A-Z]/g);
  if(res === null){
  	console.log(1);
  	} else {
  		console.log(res.length+1);
  	}
}
main("lacO");