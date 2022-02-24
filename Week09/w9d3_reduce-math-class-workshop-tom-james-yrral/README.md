# Reduce Workshop Math Class 🔢🏫

Follow the tasks in [index.js](index.js) to use the reduce method to put your math skills through their paces. Remember, reduce reduces an array to a single value by executing a provided function for each value of the array, storing the return value after each `current` array item in the `accumulator`, which starts as your `initial value`! *(It's easy to forget, but remember to add the initial value as well as the callback function where you want your accumulator to start, or else it'll default to the first item in the array.)*

The console.logs provided will start out as undefined, and once you populate each function, they'll contain your answers. You might have to get your calculators out to check if you're on the right track! 💯

👉 1. Replicate the add function from the lecture so that the variable `sum` is equal to the sum of the array.

👉 2. In `addIfTwoDigits`, add up *only* the numbers that have two or more digits so that the variable `taskTwoResult` is the sum of just the two-digit numbers in the array.

👉 3. In `addWithDoubleOdds`, double the odd numbers in the array and then add up the array. The `taskThreeResult` variable should be the sum of the whole array with the odd numbers doubled.

🌟 BONUS: Reduce isn't just for numbers. For this task, we have a list of hungry kitties. 🐈 Their hungry screms are distracting you from your math tasks! The function feedTheCats takes in an array of cat name strings. Use reduce to have the function return a string that says "I've fed" and then all the cats' names (ex - "I've fed Poppy, Tony, etc.").