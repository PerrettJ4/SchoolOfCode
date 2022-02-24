/*
## Task 4

👉 On your HTML page, you will see an input field and an 'Add To List' button. Declare a new variable, `importantThings`, as an empty array. Using JavaScript, configure the website so that when you write something in the input field and click the `Add To List` button, a new item is added to the `importantThings` array.
*/
let orderedList = document.querySelector("ol")
let importantThings = []
let addToListButton = document.querySelector("#add-to-list")
addToListButton.addEventListener("click", addListItem)

// array of objects
// now list them in order of priority

function orderAscending(ob1, ob2) {
  num1 = ob1.priority;
  num2 = ob2.priority;
  return num1 - num2;
}

let objectArray = []
function addListItem(){
    
    objectArray.push({"text": document.querySelector("input").value, "priority": document.querySelector(".priority").value})
    // console.log(objectArray)
    
    // now order the list and console log in order
    console.log(objectArray.sort(orderAscending));
    console.log(objectArray[0]["priority"])

    // remove all children of out of ol: 
    let listItems = document.querySelectorAll("li")
    console.log(listItems)
    listItems.forEach(element => orderedList.removeChild(element))
    // sort list using ascending function
    priorityObjectArray = objectArray.sort(orderAscending)
    // for loop which makes li item, inner text = text, add list item
    for(let i = 0; i < priorityObjectArray.length; i++){
        let listItem = document.createElement("li")
            listItem.innerText = priorityObjectArray[i].text
            orderedList.appendChild(listItem)
    }
    // clear boxes
    document.querySelector("input").value = ""
    document.querySelector(".priority").value = ""
}

/*
👉 As well as adding the item to the in memory array, now display each added item in an `li` element within the ordered list.

👉 Add a new label and input field element to your `index.html` file. This input field represents the priority value of your important thing, and should take in a number. Refactor your code so that, when you click your `Add To List` button, you add an object to your array, rather than a string value. For example: `let importantThings = [{text: 'telephone mother', priority: 1}]`.
*/
let importanceLabel = document.createElement("label")
importanceLabel.innerText = "Importance of thing: "
let importanceInput = document.createElement("input")
importanceInput.classList.add("priority")
let label = document.querySelector("label")
label.append(importanceLabel, importanceInput)





/*
👉 Add a new button to your site called `Order List`. Wh the button is clicked, reorder your list by priority.
*/


