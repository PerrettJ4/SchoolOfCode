// **5.1**
// Using the DOM, select the button with the id of "click-me" and save it to a variable called "button".
var button = document.querySelector('#click-me')
// Also, select the h2 with the id of "change-me" and save it to a variable called "header".
var header = document.querySelector('#change-me')
// **5.2**
// Write a function called "changeHeader" that will change the text in the header to "You changed me!".
function changeHeader(e){
    header.innerText = 'You changed me!'
}
// **5.3**
// On the "button" variable, apply an event listener that will run the "changeHeader" function when the button is clicked.
button.addEventListener('click', changeHeader)
// **5.4**
// Add an event listener to the header that will run a function called "changeColor" when you hover your mouse pointer over the header.
// This function should change the color of the header's text when you hover the mouse over it.
header.addEventListener('mouseover', handleColorChange)

function handleColorChange(e) {
    header.style.color = 'blue'
}

console.dir(header)

