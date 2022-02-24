
/* Plan
Make HTML with input, button, ul.
link HTML to main.js.
make function addTodo to get input field and put in new item.
assign class of 'todo-item'.
Add new item to list.
addEventListener to button to invoke addToDo on "click"
*/

const input = document.querySelector("input");
const list = document.querySelector("ul");
const button = document.querySelector("button");

function addTodo() {
    let inputText = input.value;
    let newListPoint = document.createElement('li');
    newListPoint.innerText = inputText;
    newListPoint.className = "todo-item";
    console.log(inputText)
    if(checkForDuplicates(inputText)){
        alert("You've already added that to the list!")
    } else{
        list.appendChild(newListPoint);
    }
};

button.addEventListener("click", addTodo)

/*
func checkForDuplicates(string)
turn a nodelit/list elements into an array, using copyBullet = Array.from(listelemnts).toLowerCase
string.toLowerCase
copyBullet.include(inputText)
*/


function checkForDuplicates(string){
    let listElements = document.querySelectorAll("li");
    console.log(listElements);
    let copyBullet = Array.from(listElements)
    let copyBulletText = copyBullet.map(element => { return element.innerText.toLowerCase()} )
    console.log(copyBullet, copyBulletText)
    if(copyBulletText.includes(string.toLowerCase())){
        return true
    } else {
        return false
    }
} 

/*
3a Plan
create a css style called completed which does a strike through to text. text-decoration-line: line-through;
link css file to html 

createe toggleDone function with parament calleed event
    this adds class to the bullet point in question
    make use of classList.toggle(".completed")
*/

// let listItem = document.querySelector("li");

function toggleDone (event) {
    console.log(event);
    event.target.classList.toggle("completed");
}


/* Plan
tidy list: function clearFinishedTodos
    use forEach to remove list items with class 'completed'

addEventListener to a button with 'clear finished tasks' to call 
clearFinishedTools:
    add a button in HTML
*/

function clearFinishedTodos (event) {
    console.log("clearFinishedTodos Called")
    listElements = document.querySelectorAll("li");
    listArray = Array.from(listElements);
    console.log(listArray);
    listArray.forEach (item => {
        console.log(item.className);
        if (item.className ==="todo-item completed") {
            list.removeChild(item);
        }
    })
}

clearTasksButton = document.querySelector("#clearList");
clearTasksButton.addEventListener("click", clearFinishedTodos);