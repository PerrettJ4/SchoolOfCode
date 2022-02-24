/*
## Task 1

👉 Use an array method to produce a new array of all of the bootcampers names which start with a vowel and store in a new variable called `vowelBootcampers`.

👉 Write a function called `makeLegend`, which takes in a `name` (string) as its only argument. The function should return a new string which includes the name plus the words `'is now a legend.'`. For example, if the name given was `'Chris'`, the function would return the string `'Chris is now a legend.'`.

👉 Using an array method on the original bootcampers array below and the `makeLegend` function, create a new array which includes `'[name] is now a legend'` for each item. Save assign this new array to the variable `legendaryBootcampers`.
*/

const bootcampers = [
  "Ayaan",
  "Daniel",
  "Claire",
  "Elly",
  "Emanuel",
  "Filipe",
  "Himesh",
  "James",
  "Juweyriya",
  "Lizard",
  "Mitchell",
  "Mohit",
  "Nasra",
  "Siddharth",
  "Tom L",
  "Tom M",
  "Joy",
  "Valerio",
  "Waseem",
  "Yrral",
];


let vowelBootcampers = bootcampers.filter(element => "AEIOU".includes(element[0]))
console.log(vowelBootcampers)

function makeLegend(string){
  return `${string} is now a LEGEND`
}

let legendBootcampers = bootcampers.map(element => makeLegend(element))
console.log(legendBootcampers)
