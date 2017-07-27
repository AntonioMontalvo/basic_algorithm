var str = "1@#$6Dst Gt*";

function isLetterNumberByIndex(str){
	for( var i = 0; i < str.length; i++ ){
		if (str.charAt(i).match(/[a-z]/i)){
			console.log("Letter " + str.charAt(i) + " found at index: " + i);
		}
		else if (str.charAt(i).match(/[0-9]/i)){
			console.log("Number " + str.charAt(i) + " found at index: " + i);
		}
		else {
			console.log("No letter or number found at index " + i + ". Instead I found this 'rare ;)' symbol " + str.charAt(i));
		}
	}
}

isLetterNumberByIndex(str);