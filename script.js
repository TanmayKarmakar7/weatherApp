const apiKey = "906ef11087b481df53fd5eb38d50016c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector('.weather-icon');

// Fetch data from api and display the result
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // check if error is found or not
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // get weather data
        let data = await response.json();
    
        //set weather data and display the result
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    
        // display the images according to the report
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/clouds.png";
        } 
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Images/clear.png";
        } 
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Images/rain.png";
        } 
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Images/drizzle.png";
        } 
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Images/mist.png";
        } 
        else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "Images/mist.png";
        } 
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "Images/snow.png";
        } 
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

// search the city name from here
searchBtn.addEventListener("click" , () =>{
    checkWeather(searchBox.value);
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
  });