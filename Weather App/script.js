const apikey = "";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")


async function fetchdata(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data); 
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";
  
        const weatherIcons = {
            Clear: "./images/clear.png",
            Rain: "images/rain.png",
            Clouds: "./images/clouds.png",
            Drizzle: "images/drizzle.png",
            Mist: "images/mist.png",
            Snow: "images/snow.png"
        };
        
        // document.querySelector(".weather-icon").src = `images/${data.weather[0].main.toLowerCase()}.png`;
        document.querySelector(".weather-icon").src = weatherIcons[data.weather[0].main];
}

searchbtn.addEventListener("click", () => {
    const city = searchbox.value.trim();
    if(city){
        fetchdata(city);
    }else{
        console.log("Please enter a city name");
    }

});
