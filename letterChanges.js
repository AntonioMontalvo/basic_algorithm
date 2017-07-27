// Challenge
// Using the JavaScript language, have the 
//function LetterChanges(str) take the str parameter being 
//passed and modify it using the following algorithm. 
//1.Replace every letter in the string with the letter 
//following it in the alphabet (ie. c becomes d, z becomes a). 
//2.Then capitalize every vowel in this new string (a, e, i, o, u)
//and finally return this modified string. 
​
​
var input = "fun times!"; // Output:"Ifmmp*3"
​
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
            "p","q","r","s","t","u","v","w","x","y","z"];
​
var letterIndex;
var newString =[];
var secondString =[];
var finalString = [];
​
​
  for (var i = 0; i < input.length; i++){
          letterIndex = input.charAt(i);
          newString.push(letterIndex);
  }
  
​
  for(var i = 0; i < newString.length; i++){
        for(var j = 0; j < alphabet.length; j++){
           if( newString[i] === alphabet[j] ){
                secondString.push(alphabet[j+1]);
           }
        } 
         if (!secondString[i]){
           secondString.push(newString[i]);
         } 
     if(secondString[i].match(/[aeiou]/)){ 
         secondString[i] = secondString[i].toUpperCase();
      }
  }
​
​
console.log(secondString.join(""));
​
// Input:"fun times!"
// Output:"gvO Ujnft!"
​
