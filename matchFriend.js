// * Determine the user's most compatible friend using the following as a guide:
//  * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//  * With that done, compare the difference between current 
//user's scores against those from other users, question by question. 
//Add up the differences to calculate the `totalDifference`.
//    * Example: 
//      * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//      * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//      * Total Difference: **2 + 1 + 2 =** ***5***
//  * Remember to use the absolute value of the differences. 
//Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, 
//and so on. 
//  * The closest match will be the user with the least amount of difference.

////////////////////FINAL////////////////////

var userArray =[
                [
"5",
"5",
"5",
"1",
"3",
"2",
"4",
"1",
"1",
"5"
],
  [
"3",
"3",
"2",
"3",
"5",
"3",
"3",
"4",
"1",
"2"
],
  [
"5",
"2",
"3",
"3",
"3",
"2",
"3",
"3",
"2",
"1"
],
  [
"5",
"1",
"5",
"5",
"5",
"5",
"3",
"5",
"5",
"5"
],
  [
"1",
"1",
"1",
"1",
"1",
"1",
"3",
"5",
"5",
"5"
],
  [
"3",
"3",
"2",
"3",
"5",
"3",
"3",
"4",
"1",
"2"
],
  [
"5",
"5",
"5",
"5",
"5",
"5",
"5",
"5",
"5",
"5"
]
 
];
    
var totalDifference = 0;


var friendsData = [
{
name: "Ahmed",
photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
scores: [
"1",
"1",
"2",
"2",
"2",
"2",
"2",
"1",
"2",
"1"
],
  difference: 0 
},
{
name: "Jacob Deming",
photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
scores: [
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1"
],
difference: 0   
},
{
name: "Jeremiah Scanlon",
photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
scores: [
"5",
"2",
"2",
"2",
"4",
"1",
"3",
"2",
"5",
"5"
],
  difference: 0 
},
{
name: "Louis T. Delia",
photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
scores: [
"3",
"3",
"4",
"2",
"2",
"1",
"3",
"2",
"2",
"3"
],
  difference: 0 
},
{
name: "Lou Ritter",
photo: "https://m.facebook.com/photo.php?fbid=10208500699025296&id=1542229019&set=a.1549418665704.77596.1542229019&source=11",
scores: [
"4",
"3",
"4",
"1",
"5",
"2",
"5",
"3",
"1",
"4"
],
  difference: 0 
},
{
name: "Jordan Biason",
photo: "https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/12741971_10205764267089153_4212986785721953092_n.jpg?oh=4e18265f7d380167223a97fbd7eba278&oe=57B78445",
scores: [
"4",
"4",
"2",
"3",
"2",
"2",
"3",
"2",
"4",
"5"
],
   difference: 0 
},
{
name: "first",
photo: "https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg",
scores: [
"2",
"2",
"4",
"2",
"3",
"3",
"3",
"3",
"2",
"1"
],
  difference: 0 
},
{
name: "first",
photo: "https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg",
scores: [
"2",
"2",
"4",
"2",
"3",
"3",
"3",
"3",
"2",
"1"
],
  difference: 0 
},
{
name: "second",
photo: "https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg",
scores: [
"2",
"2",
"4",
"2",
"3",
"3",
"3",
"3",
"2",
"1"
],
  difference: 0 
},
{
name: "miiiiiitetst",
photo: "test.com",
scores: [
"2",
"4",
"2",
"4",
"4",
"2",
"1",
"3",
"3",
"2"
],
  difference: 0 
},
{
name: "Ed",
photo: "http://funpage.ro/content/thumbs/c1bbc126c6c2627701efa21d3db61c27.jpg",
scores: [
"5",
"1",
"3",
"1",
"2",
"3",
"3",
"5",
"1",
"2"
],
  difference: 0 
},
{
name: "Jonathan",
photo: "asdfas",
scores: [
"5",
"2",
"3",
"3",
"3",
"2",
"3",
"3",
"2",
"1"
],
  difference: 0 
},
{
name: "HU",
photo: "NO",
scores: [
"3",
"3",
"2",
"3",
"5",
"3",
"3",
"4",
"1",
"2"
],
  difference: 0 
},
{
name: "Joe Smith",
photo: "http://www.joesmith.com",
scores: [
"5",
"5",
"5",
"1",
"3",
"2",
"4",
"1",
"1",
"5"
],
  difference: 0 
}
];


function findDifferences (user, match){
  for (var i = 0; i < friendsData.length; i++){
    for (var j = 0; j < 10; j++){
      totalDifference += Math.abs(userArray[user.length-1][j] - parseInt(match[i].scores[j]));
    }
    friendsData[i].difference += totalDifference;
//     console.log(totalDifference)
    console.log(friendsData[i].name + ' has a difference of '
              +friendsData[i].difference + ' with you!');
    totalDifference = 0;
  }
  
}
findDifferences(userArray, friendsData);


 function getAmigo(friends) {
   
  var count = 0;
      for(var i = 0; i < friendsData.length; i++){
        for (var j = 0; j < 10; j++){
          
          if(friendsData[i].difference === 0){
            console.log('You found your match in ' + friendsData[i].name );
          return;
          }
          
          
          if(friendsData[i].difference <= friendsData[j].difference){
            count++;
//             
//             console.log(friendsData[i].name + ' difference is ' + friendsData[i].difference + 
//                         ' and is smaller than  ' + friendsData[j].name +
//                         " whose difference value is " + friendsData[j].difference );
            
          }
          if(count === 10){
          console.log('You found your match in ' + friendsData[i].name );
          
          }
          
          
        }
//         console.log('I COUNT ' + count + ' TIMES');
        count = 0;
    }
 }
 
getAmigo(friendsData);
// console.log(getAmigo(friendsData));


