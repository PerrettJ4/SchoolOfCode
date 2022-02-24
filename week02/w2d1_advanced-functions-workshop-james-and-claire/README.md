# More About Functions: Workshop

_You walk into Toast-Bot Ltd.'s company headquarters, where a smiling representative steps forward to greet you._

Welcome to the robot toastie factory! Modern technology has reached its peak. Down with the tyranny of toasting - our robot overlor... ahem, servants, can do all the work and present us with the toasties of our dreams. But they might need a little human help getting started. You must be here to help.

For each task, comments in [`main.js`](main.js) will show you where you need to be coding.

<details>
<summary>Click me if you get stuck.</summary>
 
You can see some more examples of different types of functions [here](https://github.com/SchoolOfCode/lectures_more-about-functions-examples#examples).

</details>

## Task 1 - Functions Review

In main.js, you'll find the first function, `makeCheeseToastie`, that makes the most basic of toasties.

👉 1a. Find and fix the bugs in this function's code so that when the page loads, it logs both messages in the console with the correct ingredients and in the correct order ('Now making...' first, and then 'Enjoy...'). Only change the code in the function itself, not where the function is called afterwards!

## Task 2 - Composition

In the [index.html](index.html) file, you can see that underneath the Toast-Bot, there's a section where the Toast-Bot will place all the toasties that they make, ready for the humans to collect. To set this up, you'll need to use composition, where you use functions to help construct other functions.

👉 2a. Make a function called addIngredient that takes in one parameter (the filling) and returns a list item with that filling in its inner text.

👉 2b. Now make a function called makeCustomToastie that's set up to take in an array of fillings as a parameter. This function should: 
- Create an unordered list. 
- Use your addIngredient helper function within makeCustomToastie to add each filling in the array to that unordered list. 
- After your list contains list items for all the fillings, append that list as a child of the section element with the id `"toastie-station"`.
 
For example...

```js
makeCustomToastie([
  'caramelised onion chutney',
  'cheddar',
  'mozzarella',
  'gruyère'
]);
```

...should add an unordered list with an artisanal three cheese and chutney delight to your `"toastie-station" section`; it will appear in the browser as an unordered (bulleted) list of its fillings like so:

- caramelised onion chutney
- cheddar
- mozzarella
- gruyère

Your makeCustomToastie function should be able to cope with any length of array of ingredients and make an unordered list in the "toastie-station" section each time it's called.

But what happens if someone can't decide what to have in their toastie? Toast-Bot needs to be pre-programmed to account for any carbon-based lifeform failures. Its primary directive, no matter what, is to deliver a toastie to each customer.

👉 2c. Give makeCustomToastie's parameter a default value with the following array: `['cheddar']`. Toast-Bot should make a basic cheese toastie with these ingredients if no argument is specified when makeCustomToastie is called.

## Task 3 - Callbacks

Now, like every good robot, the Toast-Bot always wants more data to train its AI... which will definitely help it to improve its toastie-making efficiency (and definitely _won't_ be to help it to discover humans' vulnerabilities). With its level of learning right now, Toast-Bot has a 75% chance of knowing how to toast what the humans tell it to.

👉 3a. Make a function called `randomise` that returns a random number between 1 and 100. This will act as a callback function and be executed within the function you're about to make in part 3b.

Remember, a callback function is one that you intend to execute at a future date when some action has been completed or some event triggers them to run (such as within a different function as we're just about to do).

👉 3b. Then make a function called `canItToast` that will take in your `randomise` function as an argument. Use the randomise function within `canItToast` to generate a random number; if that random number is between 1 and 75, console log "Toastie ahoy." If that random number is between 76 and 100, console log "Machine learning needed".

👉 3c. Call `canItToast` under where you defined it and pass your `randomise` function in. Reload the page in the browser a few times and check that your console.log messages are working as you expected.

## Task 4 - Fat Arrows

Below the toastie station section on the HTML page, you'll notice a small form so that Toast-Bot's customers can stay up to date with the latest toasted sandwich innovations.

Have a look at the functions in your JavaScript file that power this form (`greetNewHumanAlly`, `addNameToList`, and `handleSubmit`), and see if you can figure out how they work together to make the form function.

👉 4a. Add an event listener that calls handleSubmit when the button with the id "submit-button" is clicked.

👉 4b. The functions `greetNewHumanAlly`, `addNameToList`, and `handleSubmit` that power this form are all written in fat arrow notation. Rewrite them in the normal function declaration way that we've learned so far on this course, using the word `function`.

Ensure that they remain as three separate functions and work in the same way as they did as fat arrow functions.
