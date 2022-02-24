const button = document.querySelector("#click-me");

function handleClick(event) {
  if(event.shiftKey === true) {
    button.innerText = "NAILED IT!!!!"
  }
  console.log(event);
}

button.addEventListener("click", handleClick);





const flowerButton = document.querySelector(".task-2");

function handleFlowerPower(event) {
  document.querySelector("title").innerText = "💐🌷🌼"
  console.log(event)
}
flowerButton.addEventListener("click", handleFlowerPower);







let input = document.querySelector("#title-changer");
let heading = document.querySelector("h1")

function handleChange(event) {
  heading.innerText = event.target.value;
  console.log(event);
}

input.addEventListener("keyup", handleChange)

/*
document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});


PLAN: 
- img a variable
- Function tkes event and outputs pink when hovered on
- eventlisten mouse-enter
*/

let image = document.querySelector("img")

function handleHover(event) {
  heading.style.color = "hotpink"
}
function handleOff(event) {
  heading.style.color = ""
}

image.addEventListener("mouseenter", handleHover)
image.addEventListener("mouseleave", handleOff)


