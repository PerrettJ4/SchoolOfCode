/*
## Task 2

👉 In the task-2 `index.html`, there is a `p` tag that contains a counter. Using `setInterval`, have the counter increment once every second when the page is loaded.

👉 Stop the above interval from incrementing after 12 seconds have passed.
*/


let pCounter = setInterval(function(){document.querySelector("p").innerText ++; if(document.querySelector("p").innerText === "3") clearInterval(pCounter)}, 1000)

