//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Sample Input 07:05:45PM
//Sample Output 19:05:45

var s = "12:05:45AM";

function timeConversion(s) {
    
    var amPm = s.charAt(s.length - 2);
    var noAM = s.substring(0, s.length-2);
    var indexZero = s.charAt(0);
    var indexOne = s.charAt(1);
    var subsValues = [];
    var noPM = s.substring(0, s.length-2); //getting rid of PM 
    var noStart;
    var resPM;
    var twelve ="00";
    
             
  
    for(var i = 12; i < 25; i++){
        subsValues.push(i);
    }
    if (amPm == "P" && indexZero === "0"){
         noStart = noPM.substring(1, noPM.length);
         resPM = noStart.replace(indexOne, subsValues[indexOne]);
         console.log(resPM);
         }
    else if (amPm == "P" && indexZero === "1" && indexOne === "0"){
         noStart = noPM.substring(1, noPM.length);
         resPM = noStart.replace(indexOne, subsValues[10]);
         console.log(resPM);    
    }else if (amPm == "P" && indexZero === "1" && indexOne === "1"){
         noStart = noPM.substring(1, noPM.length);
         resPM = noStart.replace(indexOne, subsValues[11]);
         console.log(resPM);    
    }else if (amPm == "P" && indexZero === "1" && indexOne === "2"){
          noStart = noPM.substring(1, noPM.length);
         resPM = noStart.replace(indexOne, subsValues[0]);
         console.log(resPM);    
    }
    if(amPm == "A" && indexZero === "1" && indexOne === "2"){
         noStart = noAM.substring(1, noAM.length);
         resAM = noStart.replace(indexOne, twelve);
         console.log(resAM)
    } else {
      console.log(noAM);
    }
}

timeConversion(s);