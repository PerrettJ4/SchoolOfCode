/* Solve the tasks below. Remember to use .reduce() in 
each function with its callback and its initial value. 
Only write your code inside the functions where the "Your 
code here" comments indicate.

Run the file with Node (node index.js in your terminal!) 
to check the console.logs for each task's result. (You 
  might have to get your calculator out to check your 
  answers! 🧠🔢)  
 */

/* 👉 1. Replicate the add function from the demonstration so 
that the variable sum is equal to the sum of the array. Use 
an initial value of zero after your reduce callback function.*/

function add(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
const taskOneResult = add([1, 2, 3, 4]);
console.log({ taskOneResult });

/* 👉 2. In addIfTwoDigits, use reduce to add up *only* the numbers 
that have two or more digits so that the variable taskTwoResult is the 
sum of just the two-digit numbers in the array.*/

function addIfTwoDigits(numbers) {
  return numbers.reduce((acc, cur) => (cur > 9 ? acc + cur : acc));
}
const taskTwoResult = addIfTwoDigits([1, 5, 10, 3, 21, 45, 2]);
console.log({ taskTwoResult });

/* 👉 3. In addWithDoubleOdds, use reduce to double the odd numbers 
in the array and then add up the array. The taskThreeResult 
variable should be the sum of the whole array with the odd numbers 
doubled.*/

function addWithDoubleOdds(numbers) {
  return numbers.reduce(
    (acc, cur) => (cur % 2 !== 0 ? acc + cur * 2 : acc + cur),
    0
  );
}
const taskThreeResult = addWithDoubleOdds([1, 2, 3, 4, 5]);
console.log({ taskThreeResult });

/* 🌟 BONUS:. Reduce isn't just for numbers. For this task, we 
have a list of hungry kitties. Their hungry screms are distracting 
you from your math tasks! The function feedTheCats takes in an 
array of cat name strings. Use reduce to have the function return 
a string that says "I've fed" and then all the cats' names (ex - 
  "I've fed Poppy, Tony, etc."). */

const hungryCats = ["Poppy", "Tony", "Narla"];

function feedTheCats(cats) {
  return hungryCats
    .reduce((acc, cur) => `${acc} ${cur},`, `I've fed`)
    .replace(/(,$)/g, "");
}
const bonusResult = feedTheCats(hungryCats);
console.log({ bonusResult });
