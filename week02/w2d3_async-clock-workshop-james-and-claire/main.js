const hand = document.querySelector(".hand");

; // example of how to rotate the hand

/* Plan!
have a second-counter which increases by 6 degrees each second

Make the hand rotate
    handRotate function
    rotate 6 deg - is position going to remain with hand centre at centre?
    transform-orign if necessary.
    style.transform = `rotate(6deg)`


rotation occur with an interval of 1s
    setInterval.
    call the handRotate function with an interval of 1s
*/


function handRotate() {
    let date = new Date();
    hand.style.transform = `rotate(${date.getSeconds()*6}deg)`;
    minuteHand.style.transform = `rotate(${date.getMinutes()*6}deg)`;
    hourHand.style.transform = `rotate(${date.getHours()*30}deg)`;
};

let handInterval = setInterval(handRotate, 1000);

// check out what date(seconds does)

/* Add a minute hand
    adding another hand into HTML - id minute hand, class hand ✔️
    add css id minute hand with same contents as .hand but shorter✔️
    function for minuteHandRotate to rotate by 6 degrees every minute
    counter will be date.getminutes()
    set interval to be 60000 ms
*/
const minuteHand = document.querySelector("#minute-hand");

/*
function minuteHandRotate() {
    let minuteDate = new Date();
    console.log(minuteDate.getMinutes());
    minuteHand.style.transform = `rotate(${minuteDate.getMinutes()*6}deg)`;
};

minuteHandRotate()
let minuteHandInterval = setInterval(minuteHandRotate, 60000);
*/

/* Add am hour hand
    adding another hand into HTML - id minute hand, class hand ✔️
    add css id hour hand with same contents as .hand but shorter✔️
    function for hourRotate to rotate by 6 degrees every hour
    counter will be date.getHours()
    set interval to be 3600000 ms
*/

const hourHand = document.querySelector("#hour-hand");

/*
function hourHandRotate() {
    let hourDate = new Date();
    console.log(hourDate.getHours());
    hourHand.style.transform = `rotate(${hourDate.getHours()*30}deg)`;
};


hourHandRotate()
let hourHandInterval = setInterval(hourHandRotate, 3600000);
*/
