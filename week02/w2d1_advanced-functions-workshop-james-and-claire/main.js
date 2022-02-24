// ----------Task 1:----------

// 🔧 Fix this function! 🔨
function makeCheeseToastie(bread, cheese) {
    console.log(`Now making your ${bread} and ${cheese} toastie...`)
    return `Enjoy your ${bread} and ${cheese} toastie!`
}

console.log(makeCheeseToastie('sourdough', 'mature cheddar'))

// ----------Task 2:----------

function addIngredient(filling) {
  let listItem = document.createElement("li");
  listItem.innerText = filling;
  return listItem
}

// Default is "cheese", forEach loop, calling add ingredient function on each element and appending to created variable "list" <-- and unorederd list tag

var section = document.querySelector("#toastie-station")
function makeCustomToastie(toastieIngredients = ["cheese"]) {
  const list = document.createElement("ul")
  toastieIngredients.forEach(element => list.appendChild(addIngredient(element)))
  section.appendChild(list)
}


//loop through add the each li 
//append the ul to the section

  makeCustomToastie([
  'caramelised onion chutney',
  'cheddar',
  'mozzarella',
  'gruyère'
]);

// ----------Task 3:----------
//math.random() to return anything between 0 or 100 (copied straight from the web and edited)
const getRandomInt = () => Math.floor(Math.random() * 100);

// Can it Toast? Using ternary operator (?): former returns if boolean is true, else latter returns
function canItToast() {
ranNum = getRandomInt()
console.log(ranNum)
 return ranNum < 76 ? "toastie Ahoy." : "Machine learning needed."
}
console.log(canItToast())
// ----------Task 4:----------
//I added lines 68 and 69, then I edited the fat arrow functions to normal functions as asked. (not gna be obvious really what has been done here)
let favorableHumans = [];

function greetNewHumanAlly(name){
return  console.log(`Greetings, ${name}. Have a toastie.`);
}

function addNameToList(name, email){ return [...favorableHumans, { name, email }];}

function handleSubmit() {
  const newName = document.querySelector('#name-input').value;
  const newEmail = document.querySelector('#email-input').value;
  greetNewHumanAlly(newName);
  favorableHumans = addNameToList(newName, newEmail);
  console.log(favorableHumans);
};

const button = document.querySelector("#submit-button")
button.addEventListener("click", handleSubmit)
