// You are given an array of integers of size . You need to print the sum of the elements in the array, keeping in mind that some of those integers may be quite large.

// Input Format

// The first line of the input consists of an integer . The next line contains  space-separated integers contained in the array.

// Output Format

// Print a single value equal to the sum of the elements in the array.

//The range of the 32-bit integer is Math.pow(-2, 31) to (Math.pow(2, 31)-1).

function aVeryBigSum(n, ar) {
    // Complete this function
    var min = Math.pow(-2, 31);
    var max = (Math.pow(2, 31)-1);
    var res = 0;
    for(var i = 0; i < n; i++){
        if (ar[i] > min && ar[i]< max){
           res += ar[i];
        }
    }
    console.log(res);
}

aVeryBigSum(3,[12123123,23423424,2342.34234234]);