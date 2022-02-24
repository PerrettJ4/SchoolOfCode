const favouriteSongs = [
    "Tiny Dancer",
    "Running Up That Hill",
    "Don't stop moving",
    "Tragedy",
    "Crazy Horses"
]
const firstWeekProfits = []
let pennies = 1;
for(let days = 0; days < 7; days++) {
    firstWeekProfits.push(pennies);
    pennies = pennies*2;
}

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  let englishNumbers = ["one", "two", "three", "four", "five"];
  index = 0

  while(index < englishNumbers.length) {
      console.log(englishNumbers[index])
      index ++
  }


