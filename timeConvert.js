function timeConvert(num){
	var toMinutesWithDecimals;
	if(num < 60){
		console.log('"0:' + num + '"');
	}
	if(num > 60){
		toMinutesWithDecimals = num/60;
		var hour = toMinutesWithDecimals.toString().slice(0,1);
		var decimalMinutes = toMinutesWithDecimals.toString().slice(2,4);
		var minutes = Math.ceil(decimalMinutes*60/100);
		console.log('"' + hour + ":" + minutes + '"');
	}
}

timeConvert(119);