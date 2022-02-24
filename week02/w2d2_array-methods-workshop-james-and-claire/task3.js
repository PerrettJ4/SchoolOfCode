let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

/* plan
create isMutlipleOf function
create individual variables of divisible numbers
if (x % y == 0) then true
*/

const dividingNumbers = [3, 5, 60, 90];



function isMultipleOf3(numsArray) {
    if (numsArray % 3 == 0) {
        return true;
    }
}

function isMultipleOf5(numsArray) {
    if (numsArray % 5 == 0) {
        return true;
    }
}

function isMultipleOf60(numsArray) {
    if (numsArray % 60 == 0) {
        return true;
    }
}

function isMultipleOf90(numsArray) {
    if (numsArray % 90 == 0) {
        return true;
    }
}

let three = someNumbers.some(isMultipleOf3);
let five = someNumbers.some(isMultipleOf5);
let sixty = someNumbers.some(isMultipleOf60);
let ninety = someNumbers.some(isMultipleOf90);

console.log(three);
console.log(five);
console.log(sixty);
console.log(ninety);