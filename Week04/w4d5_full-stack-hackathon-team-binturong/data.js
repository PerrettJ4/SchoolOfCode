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

// Math.floor(Math.random() * 20);
// let array = [];
// for (let i = 0; i < 21; i++) {
//   array.push(i);
// }
// console.log(array);

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

console.log(shuffle(bootcampers));

// var roundLeaderboard = bootcampers.map(person =>  )
//   var roundLeaderboard = bootcampers.map(person => )

// function checkLine(line) {
//   for (let i = 0; i < line.length; i++) {
//     if (
//       line.slice(i + 1).includes(line[i]) ||
//       line.slice(0, i).includes(line[i])
//     ) {
//       return false;listStyle:
//     }
//   }
//   return true;
// }
let dateObject = new Date(Date.now());

let date = dateObject.toDateString();
let score = 21;
let roundLeaderboard = shuffle(bootcampers).map((person) => {
  score--;
  return { name: person, score: score, date: date, energiser: "Art Attack" };
});
console.log(roundLeaderboard);
module.exports = roundLeaderboard;
