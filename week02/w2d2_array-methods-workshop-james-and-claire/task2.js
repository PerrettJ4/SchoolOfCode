let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  

function startsWithB(array) {
  if(array.charAt(0)==="b"){
    return true;
  }
}
let bListAnimals = animals.filter(startsWithB);
console.log(bListAnimals);

/* create function startsWithB that determines the starting letter.
  if start with b, return true.
  in new variable, put animals beginning with b.
  using array.filter(function)
  */