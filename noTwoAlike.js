//I wrote this one
//GETTING RID OF ALL ELEMENTS IN AN ARRAY THAT HAVE THE SAME VALUE USING .forEach() and .splice()
//in the case will eliminate all number 1 and ""
var arr = ["m", 2 , 1 , "w", 1 , "k", "o", "", "", "o", "k", "w", "m", "x", "j", "i", 1 , "v", "", "", "v", "i", "j", "x", "s", "h", "s", "c", "", "", "c", "s", "h", "s", "g", "w", "d", "y", "", "", "y", "d", "w", "g", "z", "p", "n", "l", "", "", "l", "n", "p", "z", "v", "f", "e", "a", "", "", "a", "e", "f", "v", "y", "e", "q", "j", "", "", "j", "q", "e", "y", "m", "h", "q", "h", "", "", "h", "q", "h", "m", "h", "a", "o", "m", "", "", "m", "o", "a", "", "", "", "", "y", "", "", "y", "", "", "h"];

function eliminateEmpty(){
  for(var i = 0; i < arr.length; i++){
     arr.forEach(myFunction);
  }
  console.log(arr);
}

 
function myFunction(value, index) {
  if (value === ""){
	 arr.splice(index,1)
  }
  if (value === 1){
     arr.splice(index,1)
  }
}

eliminateEmpty();
