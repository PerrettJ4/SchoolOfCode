let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

/* Plan
5a. add catHorse to end of list using push
*/

queue.push("catHorse");

/* 5b
remove first animal from list using shift
*/

queue.shift();

/* 5c 
add owlDonkey to front of array using unshift
*/

queue.unshift("owlDonkey");

/* 5d
remove catHorse from end of array using pop.
*/

queue.pop();

/* 5e
find index of kangarooBear
remove kangarooBear from list using splice.
*/

let index = queue.indexOf("kangarooBear");
queue.splice(index,1);

/* 5f 
put unofficialQueue at the end of queue using concat
*/

let unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];

let newQueue = queue.concat(unofficialQueue);
console.log(newQueue);