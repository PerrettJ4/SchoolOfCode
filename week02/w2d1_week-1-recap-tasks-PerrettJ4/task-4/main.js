// **4.1**
// Use the DOM to select the div with the id of "task-container" and save it to a variable called "container".
var container = document.querySelector("#task-container")
// **4.2**
// Create a new element of your choosing (one that will hold text) and save that to a variable called "myElement".
myElement = document.createElement("h2")
// **4.3**
// Set the text of "myElement" to be anything you like - go wild!
myElement.innerText = "Scooby doobie doo"
// **4.4**
// Append "myElement" as a child of the div that you selected earlier. Open the HTML page in your browser to check.
container.append(myElement)
// **4.5**
// Change one of the style properties on the new element using the DOM. (e.g. color, text-decoration, font-size, etc...)
myElement.style.color = 'green'
console.dir(myElement)
// **4.6**
// Change the title (not the heading) of the document to "Wahoo!" using the DOM.
var title = document.querySelector('title')
title.innerText = 'Wahooooooooooo!!!!'

