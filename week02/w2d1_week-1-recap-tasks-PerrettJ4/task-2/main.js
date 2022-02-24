// You have been provided with an array called "numbers". 
// Write a for loop that iterates through the numbers array and console logs each number in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  } 
*/

/*
  numbers.forEach(function(element) {
    console.log(element);
});
*/

//numbers.forEach(element => console.log(element));


const elephant = {
    name: "Dumbo",
    age: 3,
    ears: "large",
    house: "circus",
    describe: function () { return `There was an elephant named ${this.name}, he is ${this.age}, his ears are ${this.ears} and he is slave to the ${this.house}`}
}
console.log(elephant.describe())



