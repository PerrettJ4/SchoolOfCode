let attempts = 3;
let isLoggedIn = authenticateUser();

function authenticateUser(password) {
while (attempts != 0) {
    let password = prompt("Please enter the password.");
if(password === "kale2021") {
    alert("you found the treasure!");
    return true;
       break;
} else {
    attempts -=1;
    alert("you have " + attempts + "attempts left!" )
}
  } 
  return false;
}

if(isLoggedIn === true) {
    console.log("well done")
} else {
    console.log("you suck")
}