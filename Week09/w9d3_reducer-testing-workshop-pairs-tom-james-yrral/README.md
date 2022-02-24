# Reducer Testing Workshop

A reducer function is a pure function that's easy to test in JavaScript. If we're using React, we can do separate tests with the React Testing Library to check whether our React components render correctly, but testing the reducer logic underneath is independent of what React is doing. 

Let's give it a go:

In [index.js](index.js), you'll find a reducer function for a simple list.
- Talk through what each case is doing in this reducer function and how it works when it's called with your partner. Run `node index.js` in your terminal to see the console.logs function.
- In [index.test.js](index.test.js), write tests that tests each action type of the reducer. 🧪✅  The first one is started for you. 
