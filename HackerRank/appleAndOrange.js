//Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
//There is a house in the middle of two trees. "s" is the start point and "t" is the
//end point for the house. The apple tree is to the left of his house, and the orange tree
//is to its right. You can assume the trees are located on a single point, where the apple tree
//is at point "a" and the orange tree is at point "b".

//When a fruit falls from its tree, it lands "d"  units of distance from its tree of 
//origin along the -axis. A negative value of "d" means the fruit fell "d" units to the 
//tree's left, and a positive value of "d" means it falls "d" units to the tree's right.

//Given the value of "d" for "m" apples and "n" oranges, can you determine how many apples
//and oranges will fall on Sam's house (i.e., in the inclusive range )?
//Print the number of apples that fall on Sam's house as your first line of output,
//then print the number of oranges that fall on Sam's house as your second line of output.

//Input Format

//The first line contains two space-separated integers denoting the respective values of "s" and "t". 
//The second line contains two space-separated integers denoting the respective values of "a" and "b". 
// The third line contains two space-separated integers denoting the respective values of "m" and "n". 
// The fourth line contains "m" space-separated integers denoting the respective distances that each apple falls from point "a". 
// The fifth line contains "n" space-separated integers denoting the respective distances that each orange falls from point "b".

//Output Format

// Print two lines of output:
// On the first line, print the number of apples that fall on Sam's house.
// On the second line, print the number of oranges that fall on Sam's house.
//7 11       where s=7 & t=11
//5 15       where a=5 & b=15
//3 2        where m=3 & n=2
//-2 2 1     where apple #1 is @ -2; #2 is @ 2 and #3 @ 1
//5 -6       where oranges #1 is @ 5; #2 is @ -6
//in a nutshel if the number of the apple or orange plus the number of the location either the apple tree or orange tree respectively 
//is between 7 and 11 then the fruit is in Sam's house. 

//counting the fruit in Sam's House 
var totalApples = 0;
var totalOranges = 0;

// //for adding 
function add(a,b){
    return a+b;
  }


//for final retult
function fruitResult(fruit){
  console.log(fruit);
}

function main(line1, line2, line3, line4, line5) {
    var s_temp = line1.split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = line2.split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = line3.split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = line4.split(' ');
    apple = apple.map(Number);
    orange = line5.split(' ');
    orange = orange.map(Number);
    
//     console.log(s);
//     console.log(t);
//     console.log(a);
//     console.log(b);
//     console.log(m);
//     console.log(n);
//     console.log(apple);
//     console.log(orange);
  
  var appleResults = apple.map(function(x) {
   var res = add(x,a)
   if(res >= s && res <= t){
     totalApples++;
   }
//    console.log(res+ "for apples")
  });
  
  var orangesResults = orange.map(function(x) {
   var res = add(x,b);
    if(res >= s && res <= t){
     totalOranges++;
   }
//     console.log(res + "for oranges");
  });
 
   fruitResult(totalApples);
   fruitResult(totalOranges);
}

main("7 11", "5 15", "3 2", "-2 2 1", "5 -6");