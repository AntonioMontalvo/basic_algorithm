// Consider a staircase of size :

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Input Format

// A single integer, , denoting the size of the staircase.

// Output Format

// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

var space = " ";
var symbol = "#";

function stairs(n){ //my idead is to:
    for(var i = 0; i < n; i++){//for N iterations
      var spaced = space.repeat((n-1)-i);//delete spaces
      var symboled = symbol.repeat(i)//while adding symbols
      console.log(spaced + symboled+"#");
    }
}
stairs(5);