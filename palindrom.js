

var choiceWord = '';
choiceWord = 'eye';//write your word to test
////get 
var testStr = choiceWord.toLowerCase().replace(/[^a-zA-Z 0-9 /\s/]+/g,'').replace(/\s/g, '');
//remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case 

var result = testStr.split('');//split testStr into an array

var arrayfied = [];//array for the split

for (var i = result.length -1; i > -1; i--) {//reverse arrayfied
     arrayfied.push(result[i]);
}

var reversed = arrayfied.join().replace(/,/g, '');//arrayfied to string

 if (testStr === reversed){//test
    console.log(true);
 }else{
   console.log(false);
 }

console.log(reversed);
console.log(testStr);