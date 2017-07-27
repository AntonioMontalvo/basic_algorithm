// Have the function checkNums(num1,num2) take both parameters beign passed and return the strin true if num2 is greater than num1, otherwise  return the string false. If the parameter values are equal to each other then return the string -1.

function checkNums(num1,num2){
	if(num2 > num1){
		console.log("true");
		return true;
	}
	if(num2 == num1){
		console.log("-1");
		return "-1";
	}
	else if (num2 < num1){
		console.log("false");
		return false;
	}
}

checkNums(6,4);