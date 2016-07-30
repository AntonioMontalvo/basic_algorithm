// Reverse the provided string.
//
// You may need to turn the string into an array before you can reverse it.
//
// Your result must be a string.



function reverseString(str) {
 var result = "";
  for (var i = str.length -1; i >= 0; i--){
    result +=(str[i]);
  }
  return result;

}
console.log(reverseString("hello"));
