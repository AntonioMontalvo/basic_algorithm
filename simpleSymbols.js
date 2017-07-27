//Have the function simpleSymbols(str) take the str parameter being passed and determined if it is an acceptable sequence by either returning true or false. The str parameter will be composed of + or = symbols with several letters between them, and for the string to be true, each letter must be surrounded by a + symbol.

// Input: "+d+=3=+s+"	Output: "true"
// Input: "f++d+"		Output: "false"

function simpleSymbols(str) {
	var findings = [];
	var final = [];
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i).match(/[a-z]/i)){
			findings.push("Found Letter");
		}
		else if(str.charAt(i).match(/[0-9]/i)){
			findings.push("Found number");
		}
		else if(str.charAt(i).match(/[+]/i)){
			findings.push("Found +");
		}
		else {
			findings.push("Found Null");
		}
	}
	for(var j = 0; j < findings.length; j++){
		if(findings[j] === "Found letter" && findings[j+1] === "Found +" && findings[j-1] === "Found +"){
			final.push("true");
		}
		if(findings[j] === "Found letter" && findings[j+1] !== "Found +" && findings[j-1] === "Found +"){
			final.push("false");
		}
		if(findings[j] === "Found letter" && findings[j+1] === "Found +" && findings[j-1] !== "Found +"){
			final.push("false");
		}
	if(final.includes("false")){
		console.log("false");
	}
	else console.log("true");		 
	}
}

simpleSymbols("+d+94%+w+++34");
