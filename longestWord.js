var tempestString = 'Oh brave new world that kamasutra has such people in it.';
var stringsLength = [];
var arrayOfStrings;
var space = ' ';

function splitString(stringToSplit, separator) {
  arrayOfStrings = stringToSplit.split(separator);
  
  for(var i = 0; i < arrayOfStrings.length; i++){
   stringsLength.push( arrayOfStrings[i].length);
  }
  
  var max = Math.max(...stringsLength);
  for (var j = 0; j < arrayOfStrings.length; j++ ){
    if(stringsLength[j] === max){
      console.log(arrayOfStrings[j]);
    }
  }  
}

splitString(tempestString, space);

////////////
var splitString = function(string) {
  arrayOfStr = string.split(' ');
  var maxWord = '';
  arrayOfStr.forEach(function(word) {
    if(word.length > max.length) {
      maxWord = word;
    }
  }); 
  console.log(maxWord);
  return maxWord;
}

splitString(tempestString);
