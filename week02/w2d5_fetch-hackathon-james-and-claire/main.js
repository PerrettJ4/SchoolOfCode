/* Plan!
// put in in browser geolocation api, return long lat co-ordinates "longitude" "latitude"
*/

//Uses inbuilt borwser API to get lat and long
// contains errors for if unable to get location
function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    let coordinates = [longitude, latitude];
    let temperature = getWeatherData(coordinates[0],coordinates[1]);
    return temperature;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
    console.log("failsafe triggered")
    failsafeInterfaceCreate()
    let main = document.querySelector('main');
    main.removeChild(status);
        
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    let coordinates = navigator.geolocation.getCurrentPosition(success, error);
    return coordinates;
  }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);

/*
API: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

Weather app:
    bring in 1 day forcast and 5 days forcast for a given location
        1 day forcast as 24 h.
        need an input box for city entry
        take the text from the input and feed into location API.

Weather:
    1 day forcast:
    take in latitude and longitude to put straight into weather app
    async function getTemperature1Day.
    use city in await fetch of API data(response variable)
    await the parse of the JSON  (data variable)
    from data object, get temperature as string
*/
async function getWeatherData (latitude, longitude) {
    console.log("running Temp1D")
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=eb5f6d269d61fa16daa92182db910e36`);
	  const data = await response.json();
    let temperature = Math.floor(data.main.temp)
    let temperatureHTML = document.createElement('h3')
    temperatureHTML.innerText = `Temperature: ${temperature} °C`
    
    let description = data.weather[0].description;
    let desriptionHTML = document.createElement('h3')
    desriptionHTML.innerText = description[0].toUpperCase() + description.slice(1)
    
    //  let country = data.name;
    // let rain = data.rain;
    let wind = data.wind.speed;
    let windHTML = document.createElement('h3')
    windHTML.innerText = `Wind Speed: ${wind} km/h`

    let mainHTML = document.querySelector("main")
    mainHTML.appendChild(temperatureHTML)
    mainHTML.appendChild(desriptionHTML)
    mainHTML.appendChild(windHTML)

    // console.log(wind);
    getPokemonImage(temperature);
    return temperature, description, wind;
}

/* Pokemon API:
    insert picture of: ice pokemon (type 15) for T<0
                       fire pokemon (type 10) for T>20
                       grass pokemon (type 12) for 0<T<20
    switch () {
        case value:
            
            break;
    
        default:
            break;
    }
    random number generator Math.floor(math.random)*20
    make image element with src = data.randomNumber.url
    append image element to main.
    call function in getWeatherData and Failsafe
    with arg of temperature
*/

async function getPokemonImage(temperature) {
    let main = document.querySelector("main");
    let image = document.createElement("img");
    main.appendChild(image);
    let randomNumber = Math.floor(Math.random) * 20;
    if (temperature < 0) {
            let response = await fetch("https://pokeapi.co/api/v2/type/15");
            let newData = await response.json();
            let imageURL = newData.pokemon[0].pokemon.url;
            image.src = imageURL;
            console.log(randomNumber, newData);
    } else if (temperature > 20){
            response = await fetch("https://pokeapi.co/api/v2/type/10");
            let newData = await response.json();
            console.log(randomNumber, newData);
            image.src = newData.pokemon[0].pokemon.url;
    } else {
            response = await fetch("https://pokeapi.co/api/v2/type/12");
            let newData = await response.json();
            let imageURL = newData.pokemon[0].pokemon.url;
            image.src = imageURL;
            console.log(randomNumber, newData);
    }
}

/*
    NOT USED ---
    3 days of forcasts:
    https://goweather.herokuapp.com/weather/{cit
    async function getTemperature3Day:
    use city in await fetch of opject from API.(response variable)
    await the parse of the JSON  (data variable)
    from data object, get DailyForcasts.Temperature.Minimum.Value,DailyForcasts.Temperature.Maximum.Value DailyForcasts.Temperature.MinimumUnit
    ----

Display:
2 sections, one for 1d one for 3 day.
input to enter postcode at top.
headings: h1 for page title
          h2 for 1 day and 3 day forcast titles
          h3 to display temperatures and units
possible dynamic background depending on weather
    suitable picture of animal in human clothing associated with weather.
CSS grid?
    */


   
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
    
    // in get weather failsafe
    // if(temperatureHTML.innerText.length > 0)
    // tempHTML.removeChild(everything which ends in HTML)
    // removeChild
    
    // creating text elements
    let mainHTML = document.querySelector("main")
    let desriptionHTML = document.createElement('h3')
    let temperatureHTML = document.createElement('h3')
    let cityHTML = document.createElement('h2')
    let windHTML = document.createElement('h3')
    
async function getWeatherFailsafe() {
  if(cityHTML.innerText.length > 0){
    mainHTML.removeChild(desriptionHTML)
    mainHTML.removeChild(temperatureHTML)
    mainHTML.removeChild(cityHTML)
    mainHTML.removeChild(windHTML)
  }
  let city = document.querySelector("input").value
  console.log(city, "Submit button pressed")
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb5f6d269d61fa16daa92182db910e36`);
  const data = await response.json();

  cityHTML.innerText = city[0].toUpperCase() + city.slice(1)

  let temperature = Math.floor(data.main.temp)
  temperatureHTML.innerText = `Temperature: ${temperature} °C`
  
  let description = data.weather[0].description;
  desriptionHTML.innerText = description[0].toUpperCase() + description.slice(1)
  
  // let country = data.name;
  // let rain = data.rain;
  let wind = data.wind.speed;
  windHTML.innerText = `Wind Speed: ${wind} km/h`

  mainHTML.appendChild(cityHTML)
  mainHTML.appendChild(temperatureHTML)
  mainHTML.appendChild(desriptionHTML)
  mainHTML.appendChild(windHTML)

  // console.log(wind);
  getPokemonImage(temperature);
  return temperature, description, wind;
}

