// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".titleCase("I'm a little tea pot") should return a string.

// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
// function titleCase(str) {
//   return str;
// }

// titleCase("I'm a little tea pot");
var tempestString = 'Oh brave new world that has such people in it.';
var comma = ' ';
var sentence =[];
var upperSentence =[];

function lower (phrase){
  sentence.push(phrase.toLowerCase());
//   console.log(sentence);
}
lower(tempestString);



function splitString(stringToSplit, separator) {
  
var arrayOfStrings = stringToSplit.split(separator);
// console.log(arrayOfStrings);
  
  for (var i = 0; i < arrayOfStrings.length; i++){
    var res2 = arrayOfStrings[i].replace(arrayOfStrings[i][0], arrayOfStrings[i][0].toUpperCase());
    upperSentence.push(res2);
//     console.log(res2); 
  }
//    console.log(upperSentence);
}

splitString(sentence[0], comma);

function backToPhrase(array){
 var result =  array.toString().replace(/,/g , " ");

  console.log(result);
}

backToPhrase(upperSentence);