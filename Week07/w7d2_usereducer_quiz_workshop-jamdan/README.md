# Build a personality quiz with useReducer

It's time to unleash your inner teenager and create a personality quiz, using the useReducer hook to keep track of the responses to each question so you can calculate the results at the end.

To see a visual about how the reducer for your quiz will work, see the [diagram here](https://www.canva.com/design/DAENwJNdEC0/GIou8tOfGdXoUHyxn-PTYQ/view?utm_content=DAENwJNdEC0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink).

1.  In [index.js](src/components/App/index.js) of your `App` component, import your `useReducer` hook and use it within your component.

2.  Set your reducer function's initial state to be an object with a property called `quizResults` whose value is an empty array. This is where you'll store the answer to each question via the `useReducer`'s reducer function.

3.  Outside of the `App` component's function, create your reducer function that you're using in your `useReducer` hook:

    - Remember that this reducer function needs to take in `state` and `action` and return the new, immutably updated state.

    - Implement the following action types within the reducer function:

      - `ADD_ANSWER`
        - The new state should immutably update the `quizResults` array and add the user's choice/answer (e.g. either: `a`, `b`, `c`, `d`) to it.
        - You'll need to make the user's choice available under the action's payload. (Remember that `action` will be whatever you `dispatch` in your app).
      - `RESET_ANSWER`

        - The new state should immutably update the `quizResults` array to be an empty array.

    - Don't forget to add a default case that just returns the state as-is!

4.  The `handleAnswerClick` function in `App` is where you'll use the `ADD_ANSWER` case you just wrote to update the `useReducer` hook's state with each answer. It's already passed down to the AnswerChoice component, and you can use the console.log to make sure it's working. You'll notice that each `answerChoice` has an `answerIndex` that's handed in as an argument to `handleAnswerClick`. So:

    - If the `answerIndex` is 0, you know the user clicked choice `a`.
    - If the `answerIndex` is 1, you know the user clicked choice `b`.
    - And similarly for the other two choices.

    When dispatching, you should use `answerIndex` to include the user's choice (either `a`, `b`, `c` or `d`) within the action payload.

5.  Write similar code in the `handleResetButtonClick` that's been hooked to the reset quiz button that uses the `RESET_ANSWER` case.

6.  The last step, of course, is to calculate the results! In the `calculateResults` function, use the state from your `useReducer` with all the answers collected. Your function should figure out which choice (`'a'`, `'b'`, `'c'`, or `'d'`) was clicked the most often and set the `result` state accordingly.

### Bonus:

🌟 I know it's tempting, but only **after** you have your functionality working, **then** go into [`/libs/questionData.js`](src/libs/questionData.js), where you can replace the sample text for the questions and answers with your own text.

🌟 Jazz up your page with CSS styling and animations. Get creative!

🌟 Write some tests for your reducer function in [`app.test.js`](src/components/App/app.test.js) to make sure each case is functioning in the way that you expect.

🌟 Experiment with conditional rendering. Can you make it so that the `ResultsDisplay` component only shows up after the button is pressed? Can you get each question to render one at a time? Can you get the questions to be hidden at the end of the quiz when the results show?

🌟 If you still have time, keep customizing your app!

- Do you want to add more questions?
- Is there a way that you can shuffle the answer choices in different orders to make it less predictable, for example?
- Is there a way you can make sure a user can only click on one answer per question?
- ...and more! The sky's the limit.
