/* 👉  Write the code needed here so that the button with the id "get-cats":
    - sends a request to the server for all of the cats
    - iterates through the data returned and shows each cat's name, human, and hobby on the DOM
*/
/* 
Plan
Select the button get-cats and save it in a variable
Select the cats section from the dom and save it in a variable

Declare an async function to get cats
Inside the function, await the response from the cats api and store it in a variable
Await the response of parsing the returned json object and store it in a variable
Iterate over the payload of the object and call the create cat display function

Declare a function to create a cat display
Takes in an object
Create a dom element of section
create a dom element of h2
set the inner text of h2 to the cat name
append the h2 to the section
create a dom element of p
set inner text of p to share the human and hobby
append the p to section
append the section to the greater cats section

Add event listener to getCatsButton to send a get request
*/

const getCatsButton = document.querySelector('#get-cats');
const catsSection = document.querySelector('#cats');

getCatsButton.addEventListener('click', getCats);

async function getCats() {
  const response = await fetch('https://localhost:5000/api/cats');
  const data = await response.json();

  data.payload.forEach((cat) => createDisplay(cat));
}

function createDisplay(cat) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.innerText = cat.name;
  section.appendChild(title);

  const description = document.createElement('p');
  description.innerText = `My name is ${cat.name}. My human is ${cat.human} and my favourite thing to do is ${cat.hobby}.`;
  catsSection.appendChild(section);
}
