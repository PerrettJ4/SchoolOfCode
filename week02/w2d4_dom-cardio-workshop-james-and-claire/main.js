// make a div with JS

const div = document.createElement("div");

// add a class of wrapper to it

div.classList.add("wrapper");

// put it into the body

const body = document.querySelector("body");

body.appendChild(div);

// make an unordered list

const list = document.createElement("ul");
console.log(list);

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const item1 = document.createElement("li")
const item2 = document.createElement("li")
const item3 = document.createElement("li")

item1.innerText = "one"
item2.innerText = "two"
item3.innerText = "three"

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);


div.appendChild(list);
// console.log(div);

// create an image
const image = document.createElement("img");
image.src = "https://www.nicepng.com/png/full/804-8041569_cute-sticker-easy-cute-dinosaur-drawing.png";

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of cute puppy
// Append that image to the wrapper

image.style.width = "250px";
image.classList.add("cute");
image.alt = "cute puppy";
div.appendChild(image);

console.log(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const main = document.createElement("main")
const paragraph1 = document.createElement("p")
const paragraph2 = document.createElement("p")

main.appendChild(paragraph1)
main.appendChild(paragraph2)

body.prepend(main)
console.log(body)
// add a class to the second paragraph called warning
// remove the first paragraph
paragraph2.classList.add("warning")
main.removeChild(paragraph1)
// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard (name, age, height) {
    let newDiv = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    newDiv.classList.add("playerCard");
    h2.innerText = name.toUpperCase() + "-" + age;
    p.innerText = `They are ${height} cm and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!`;
    let deleteButton = createButton()
    newDiv.appendChild(h2);
    newDiv.appendChild(p);
    newDiv.appendChild(deleteButton);
    cardClass.appendChild(newDiv);
}
//



// have that function return:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new section element with a class of cards
const cardClass = document.createElement("section");
cardClass.classList.add("Cards");
console.log(cardClass)


// make 4 player cards using generatePlayerCard
generatePlayerCard("Scooby", 5, 70);
generatePlayerCard("Ace", 8, 100);
generatePlayerCard("Joe", 15, 120)
generatePlayerCard("Claire", 26, 160)

body.prepend(cardClass);


// append those cards to the section
// put the section into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

function createButton() {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.addEventListener("click", handleClick);
    return deleteButton;
}

function handleClick() {
    console.log("skkkkr");
    newDiv = document.querySelector(".playerCard")
    cardClass.removeChild(newDiv);
    // event.target
}

// select all the buttons!
// make a delete function
// loop over them and attach a listener


