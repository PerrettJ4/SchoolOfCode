// **1.1:**
// Write a function that takes in two numbers and multiplies them together.
// Using that function, have the answer pop up in an alert.
function multiplyTwo(num1, num2){
    result = (num1*num2)
    return result
}
// **1.2**
// Prompt the user to give you two numbers, and save them into variables.
arg1= prompt('Please enter number 1:')
arg2= prompt('Please enter number 2:')
// **1.3**
// Call the function from step 1.1 with those two user-provided numbers handed in.

// **1.4**
// If the answer is even, have the alert in the function say "It's even!" followed by the answer.
// If the answer is odd, have the alert in the function say "It's odd!" followed by the answer.

// **1.5**
// Refactor the strings in the alert in task 1.4 to e template literals, using string interpolation 
// (dollar squigs!) if you haven't already.
multiplyTwo(arg1,arg2) % 2 === 0 ? alert(`${result} is even!`) : alert(`${result} is odd!`)