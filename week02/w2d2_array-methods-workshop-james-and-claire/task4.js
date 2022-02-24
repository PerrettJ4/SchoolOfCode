let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

// create a function to check if multiple of 7

function isMultipleOf7(num){
    return num % 7 === 0 ? true : false
} 
const checkMultipleOf7 = sevenTimesTable.every(isMultipleOf7)
console.log(checkMultipleOf7)

function isMultipleOf77(num){
    return num % 77 === 0 ? true : false
} 
const checkMultipleOf77 = seventySevenTimesTable.every(isMultipleOf77)
console.log(checkMultipleOf77)

// 4C)
function isNotMultipleOf77(num){
    return num % 77 !== 0 ? true : false
}

const rogueNumber = seventySevenTimesTable.find(isNotMultipleOf77)
console.log(rogueNumber)

// 4D)
const rogueNumberIndex = seventySevenTimesTable.findIndex(isNotMultipleOf77)
console.log(rogueNumberIndex)
