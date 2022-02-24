console.log("hi")
async function Photo() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=g02WoNnwB9RRl11UPdJrxjMfMkiy5lfViNE6cuJF");
    const data = await response.json();
    let photo = document.querySelector("img")
    photo.src = data.hdurl
    let heading = document.querySelector("h2")
    heading.innerText = data.title
    // console.log(photo, data)
    console.log("hi")
}
Photo()


// for test pursposes only
failsafeInterfaceCreate()

/*
function failsafeInterfaceCreate(){
    // creating the failsafe input interface
    const footer = document.createElement("footer")
    const input = document.createElement("input")
    let submitButton = document.createElement("button")
    input.type = "text",
    input.placeholder = "Please enter you nearest city"
    submitButton.innerText= "SUBMIT"
    submitButton.classList.add("submitButton")

    let body = document.querySelector("body")

    body.appendChild(footer)
    footer.appendChild(input)
    footer.appendChild(submitButton)
    // calling the failsafe function
    submitButton.addEventListener("click", getWeatherFailsafe)
}

async function getWeatherFailsafe() {
    let city = document.querySelector("input").value
    console.log(city, "Submit button pressed")
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}`);
    const data = await response.json();
    // insert the pull requests
}
*/

