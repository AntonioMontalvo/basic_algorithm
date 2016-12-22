// ## Find the summit
// Given a list of numbers, which represents the altitudes of markers along a mountain range, find the summit - the highest point on the mountain range.

// For example, given the array `[1, 3, 4, 6, 7, 2, 3, 8, 5, 3]`, your function should return `8`, which is the highest point in the list.
// ```javascript
// function findSummit(altitudes) {
//     //code here
    
//     return highestPoint;
// }
// ```
// **Bonus** Instead of returning the height, return the index in the array where the peak occurs - don't use `.indexOf`!  
// **Bonus** Write a function to find the deepest valley (ie, the lowest point).

// ## Lazy Hikers
// Given a list of numbers which represent the altitudes of markers along a hiking trail, find the section of the trail with the steepest up-slope.

// For example, given the array `[1, 3, 4, 6, 7, 2, 3, 8, 5, 3]`, your function should return `6`, because the slope from altitude `3` to altitude `8` (at index `6`) is the steepest.

// ```javascript
// function findSteepestSegment(altitudes) {
//     //code here
// }
// ```

// **Bonus** Assume that going down hill is just as hard, and include the downhill slopes in your calculation.

// ## Lunch Spots
// Again, given a list of numbers which represent altitude along a mountain range, find the indexes of the peaks along the range - they may have flat terrain for a picnic!

// For example given the array `[1, 3, 4, 6, 7, 2, 3, 8, 5, 3]`, your function should return the array `[4, 7]` as they are the two peaks along the range.

// **Hint** Try drawing the mountain range described above as a line graph to visualize the problem.

// ```javascript
// function lunchSpots(altitudes) {
//     //code here
    
//     //return an array of the indexes of the peaks
// }
// ```
////////////////////////////////////
//        Find peaks              //
////////////////////////////////////
var peaks = [20, 3, 4, 6, 7, 2, 3, 8, 5, 15];//an array of altitudes. To find a peak; lets first define peak. A peak occurs when: looking at the altitudes values of the indexes right next to the index you are on;  when both values are lower than your value, then you are a peak.

//setting this indexes to -1 we take care of the first and last values in the array when looking to the right or the left.
peaks[-1]= -1;
peaks[peaks.length] =-1;


var n = 0; //count the numner of peaks in our array
 function findSummit(altitudes) {
   var highestPeaks =[];//we don't really need this but is cool to have it.
      for(var i = -1; i < altitudes.length; i++){
      if(altitudes[i] > altitudes[i-1] && altitudes[i] > altitudes[i+1] ){
        n++;
       var highestPoint =  altitudes[i];//store the altitude value
        console.log(highestPoint + ' at index: '+ i); 
        highestPeaks.push(altitudes[i]);
        console.log(highestPeaks);
      }
    }
   console.log('There are '+ n + ' peaks in this arrays');
 }

findSummit(peaks);

////////////////////////////////////
//        Find highest peak       //
////////////////////////////////////

var peaks2 = [20, 3, 4, 1, 799, 21, 3, 80, 5, 1500];

 function findSummit2(altitudes) {
  var count = 0;
   
      for(var i = 0; i < altitudes.length; i++){
        
        for (var j = 0; j < altitudes.length; j++){
          
          if(altitudes[i] > altitudes[j]){
            count++;
//             console.log('Index ' + i + ' Is bigger than index ' + j);
          }
        }
        if(count == altitudes.length-1){
          console.log('You found your peak at index ' + i + '. The altitude is ' + altitudes[i] + '. meters!' );
        } else {
          
          count = 0;
        }
    }
 }
 
findSummit2(peaks2);

////////////////////////////////////
//        Find lowest valleys      //
////////////////////////////////////
//an array of altitudes. To find a valley; lets first define valley. A valley occurs when: looking at the altitudes values of the indexes right next to the index you are on; when both values are higher than your value, then you are a valley.

var peaks3 = [2, 34, 35, 23, 25, 33, 14, 5, 1, 45];

//setting this indexes to -1 we take care of the first and last values in 
//the array when looking to the right or the left.

peaks3[-1]= -1;
peaks3[peaks3.length] =-1;


var n = 0;
 function findLowestValleys(altitudes) {
      for(var i = -1; i < altitudes.length; i++){
      if(altitudes[i] < altitudes[i-1] && altitudes[i] < altitudes[i+1] ){
        n++;
       var lowestPoint =  altitudes[i];
        console.log(lowestPoint + ' at index: '+ i);
        
      }
    }
   console.log('There are '+ n + ' valleys in this arrays');
 }

findLowestValleys(peaks3);

////////////////////////////////////
//        Find deepest valley     //
////////////////////////////////////
var peaks4 = [200, 34, 564, 31, 799, 231, 333, 880, 45, 1500];

 function findDeepestValley(altitudes) {
  var count = 0;
   
      for(var i = 0; i < altitudes.length; i++){
        
        for (var j = 0; j < altitudes.length; j++){
          
          if(altitudes[i] < altitudes[j]){
            count++;
//             console.log('Index ' + i + ' Is bigger than index ' + j);
          }
        }
        if(count == altitudes.length-1){
          console.log('You found your valley at index ' + i + '. The altitude is ' + altitudes[i] + '. meters!' );
        } else {
          
          count = 0;
        }
    }
 }
 
findDeepestValley(peaks4);

////////////////////////////////////
//     Find steepest up-slope     //  
////////////////////////////////////

var peaks5 = [2200, 1323, 156654, 1231, 1799, 2231, 113333, 44880, 4523, 5000];
var altitudesDifference =[];

 function findSteepestUpSlope(altitudes) {
      for(var i = 0; i < altitudes.length-1; i++){
        altitudesDifference.push( altitudes[i+1] - altitudes[i]);
      }
   
     function findSummit2(altitudes) {
      var count = 0;
        for(var j = 0; j < altitudes.length; j++){
          for (var k = 0; k < altitudes.length; k++){
            if(altitudes[j] > altitudes[k]){
              count++;
            }
          }
            if(count == altitudes.length-1 && altitudes[j] == Math.abs(altitudes[j])){
              console.log('The steepest up slope is between index ' + j + ' and index '+ (j+1) + 
                          '. The difference in  altitude is ' + altitudes[j] + '. meters!' );
            } else {
              count = 0;
            }
        }
     }
   
     findSummit2(altitudesDifference);
 }
 findSteepestUpSlope(peaks5);



////////////////////////////////////
//        Find plateau            //
////////////////////////////////////
//let's define plateau.  From a given index and compared to all other cases the difference in altitude between the given index and the indexes before and after should be the least.










