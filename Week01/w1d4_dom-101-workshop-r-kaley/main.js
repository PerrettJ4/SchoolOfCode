let pennies = 1;
const output = document.querySelector("output");

const handleClick=() =>  {
  console.log("Im just to prove it's working!");
  pennies *= 2;
  document.querySelector("output").innerText = `${pennies} pennies`
}

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];

var myVar = document.querySelector(".quote");
myVar.innerText = ("Stoke on Trent, magical place on the river Trent");

document.querySelector("h1").style.textDecoration = "underline"

/////BREAK//////

const LisTip = (tip) => {
let li = document.createElement("li");
li.innerText = tip;
tips.appendChild(li);
}


let tips = document.querySelector("#tips-list")
  extraTips.forEach((tip) => {
    let li = document.createElement("li");
    li.innerText = tip;
    tips.appendChild(li);
    } )



// for(i=0; i < extraTips.length; i++) {
//   let li = document.createElement("li");
//   li.innerText = extraTips[i];
//   tips.appendChild(li);
// }


function Stoke(){
  return "isBad"
}

const Burnley =()=> "isLit"

