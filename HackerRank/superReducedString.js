// Steve has a string, , consisting of  lowercase English alphabetic letters. In one operation, he can delete any pair of adjacent letters with same value. For example, string "aabcc" would become either "aab" or "bcc" after operation.

// Steve wants to reduce  as much as possible. To do this, he will repeat the above operation as many times as it can be performed. Help Steve out by finding and printing 's non-reducible form!

// Note: If the final string is empty, print Empty String .
//Sample Input 0

// aaabccddd
// Sample Output 0

// abd

// Sample Case 0

// Steve can perform the following sequence of operations to get the final string:

// aaabccddd → abccddd
// abccddd → abddd
// abddd → abd
// Thus, we print abd.

// Sample Input 1

// baab
// Sample Output 1

// Empty String
// Explanation 1

// Steve can perform the following sequence of operations to get the final string:

// baab → bb
// bb → Empty String
// Thus, we print Empty String.

// Sample Input 2

// aa
// Sample Output 2

// Empty String

function reduceMe(str){
    for ( var i = 0; i <str.length; i++ ){
      if( str[i] === str[i+1] ){
        str[i] = "";
        str[i+1]="";
      } 
    }
 return  eliminateEmpty(str);
}

///////GET RID OF THE EMPTY VALUES IN THE ARRAY USING .forEach() and .splice() methods
function eliminateEmpty(arr){
  for( var i = 0; i < arr.length; i++ ){
     arr.forEach(myFunction);
  }
  return arr;
}

function myFunction(value, index, arr) {
  if ( value === "" ){
   arr.splice(index,1)
  }
}

////////////THIS IS THE MAIN FUNCTION
function super_reduced_string (s){
  var split = s.split("");
  var firstResult = reduceMe(split);
  
  for ( var i = 0; i <firstResult.length+300; i++ ){
      if ( firstResult[i] === firstResult[i+1] ){
          reduceMe(firstResult);
      } 
  }
  var resultAsString = firstResult.toString();
  var finalResult = resultAsString.replace(/,/g, "");
  
  if (finalResult === ""){
    var empty = "Empty String";
    console.log(empty);  
    return empty;
  } else {
      console.log(finalResult);  
      return finalResult;
  }
}


super_reduced_string (case5);

//aaabccddd
//baab

//case5: mwkommokwmxjivkkvijxshscbbcshsgwdyqqydwgzpnlzzlnpzvfeaiiaefvyeqjccjqeymhqhiihqhmhaomkkmoahhddymmyddh
//case5: Empty String

//case12: baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab
//case12: Empty String

//case13: lrfkqyuqfjjfquyqkfrlkxyqvnrtyssytrnvqyxkfrzrmzlygffgylzmrzrfveulqfpdbhhbdpfqluevlqdqrrcrwddwrcrrqdql
//case13:Empty String

//case11:acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj



































