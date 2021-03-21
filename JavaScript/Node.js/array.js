var firstLetter = "";
var firstName = "Ada";

firstLetter = firstName[0]; //prints the first letter of the name

console.log(firstLetter)

var ourArray = ["Ranul", "Jaya"] //an array
              //       0                1    index for the first index
var myArray = [["Hello,", 12],["What are you?", 11]];
              //   0       1          0          1    index for the second index
var myData = ourArray[0];

console.log(myData)

var accessArray = myArray[0][0]; //acces the multiarray will print Hello
console.log(accessArray)

ourArray.push(["Hello", 1]) //adds a new varibale to the array
console.log(ourArray[2][1]) // prints 1

ourArray.pop(); //removes the last element of the array
console.log(ourArray)

var removedFromArray = myArray.shift(); //removes the first element from the array
console.log(myArray)

myArray.unshift("Happy") //adds an array at the begininig of the array
console.log(myArray)



