
// Search Function

function searchCity() {

    const searchInput = document.getElementById("citySearch");

    const city = searchInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const weather = getWeather(city);

    if (weather) {

        document.getElementById("cityName").textContent = city;

        document.getElementById("temperature").textContent =
            weather.temperature + "°C";

        document.getElementById("condition").textContent =
            weather.condition;

        document.getElementById("humidity").textContent =
            weather.humidity + "%";

        document.getElementById("wind").textContent =
            weather.wind + " km/h";

    } else {

        alert("Weather data not found for " + city);
    }
}