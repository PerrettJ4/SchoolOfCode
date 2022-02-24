const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

/*
create compare function
  something like return a-b
use sort on broom cupboard with compare function
*/

function compare(num1,num2) {
  // console.log(num1, num2);
  // console.log(num1 - num2);
  return num1-num2;
}

console.log(broomCupboard.sort(compare));

/*
plan
create Descending function
  return num2 - num1
run descending function of potions.shelf
*/

function descending(num1, num2) {
  return num2 - num1;
}

function himeshDescending(ob1, ob2) {
  num1 = ob1.shelf;
  num2 = ob2.shelf
  return num2 - num1;
}
console.log(potions.sort(himeshDescending));


console.log(potions[0]["shelf"])
// .shelf.sort(descending));


