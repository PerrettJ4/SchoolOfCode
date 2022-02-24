console.log("It's Kanye time...");

/*
👉 Write an async function called `getQuote`.

👉 Use fetch to send a GET request to `https://api.kanye.rest/` and store the resolved value of the returned promise in a variable called `response`.

👉 Call the `.json()` method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called `data`.

👉 Use that data to set the text of the `h1` with id `"kanye-quote"`.

👉 Call this function as soon as the page loads.
*/

async function getQuote() {
    const response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    const h1 = document.querySelector('#kanye-quote');
    let prevQuote = h1.innerText
    h1.innerText = data.quote;
    if(prevQuote !== "Insert Kanye Quote here." && isDuplicate(prevQuote) === false) {
        addQuoteHistory(prevQuote);
    }
}



getQuote();

/* Plan!
Get button with id new-quote-button in variable newQuoteButton
assign event listener for click to call getQuote
*/

const newQuoteButton = document.querySelector("#new-quote-button");

newQuoteButton.addEventListener("click", getQuote);

/*Plan 3
new function addQuoteHistory 
    get kanye-quote-histroy element
    create new li
    assign li innertext as current quote.
    append new li to kanye-quote-history
    store previous quote
*/

const quoteHistory = document.querySelector("#kanye-quote-history")

function addQuoteHistory(string) {
    console.log("add quote history")
    let listItem = document.createElement("li");
    listItem.innerText = string;
    quoteHistory.appendChild(listItem);
}

/*
bonus plan
create a function that checks for duplicates
capture all the list elements using queryselectrall
turn ist elements into an array
use use includes to see if the if return from api === any of the list elements, then do not add
add duplicates function into getquote function at the 'if' statement
*/

function isDuplicate (string) {
    const listElements = document.querySelectorAll('li');
    let listArray = Array.from(listElements);
    listArray = listArray.map(element => {return element.innerText});
    console.log(listArray)
    if (listArray.includes(string)) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}



