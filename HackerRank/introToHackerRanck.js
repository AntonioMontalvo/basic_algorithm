process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solveMeFirst(a, b) {  // a typical add function
  // Hint: Type return a+b below   
    return a + b;
  
}

function main() {
    
    //readLine() is a function that will use stdin (standard input stream) and add it to data. Then .split is use on the data string converting it to an array and stashing it into input_stdin_array. Finally readLine() returns the value of each item of the array so we can pass it to our add function and console.log the result.

    var a = parseInt(readLine(2));
    var b = parseInt(readLine(3));

    var res = solveMeFirst(a, b);
    console.log(res);
}
