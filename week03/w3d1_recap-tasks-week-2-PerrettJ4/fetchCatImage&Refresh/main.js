/*
## Task 3

👉 Create an image element on the task-3 `index.html`. Using `fetch`, get a random cat image URL using the following API: https://api.thecatapi.com/v1/images/search

👉 Once you have retrieved your image URL, display the image on the page. A different picture should be displayed every time you reload the page.

👉 Create a button element. Add an event listener to the button so that, when you click the button, a new image is displayed.
*/

let body = document.querySelector("body")
let catImage = document.createElement("img")
body.appendChild(catImage)

async function fetchCatImage(){
    let response = await fetch("https://api.thecatapi.com/v1/images/search")
    let data = await response.json()
    console.log(data)
    catImage.src = data[0].url
}

const refreshCatButton = document.createElement("button")
refreshCatButton.innerText = "Refresh cat Photo"
body.appendChild(refreshCatButton)

refreshCatButton.addEventListener("click", handleClick)
function handleClick(){
    fetchCatImage()
}

