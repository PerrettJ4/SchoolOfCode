let x = document.querySelector("#x");
x.addEventListener("click", findTreasure);

function findTreasure(e) {
  x.innerText === "💰" ? (x.innerText = "❌") : (x.innerText = "💰");
  x.style.fontSize === "80px"
    ? (x.style.fontSize = "16px")
    : (x.style.fontSize = "80px");
}
