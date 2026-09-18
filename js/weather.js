
// Weather Data

const weatherData = {
    Chattogram: {
        temperature: 29,
        condition: "Partly Cloudy",
        humidity: 78,
        wind: 12
    },

    Dhaka: {
        temperature: 31,
        condition: "Sunny",
        humidity: 65,
        wind: 10
    },

    Sylhet: {
        temperature: 27,
        condition: "Rainy",
        humidity: 84,
        wind: 14
    },

    London: {
        temperature: 18,
        condition: "Cloudy",
        humidity: 72,
        wind: 9
    },

    Tokyo: {
        temperature: 25,
        condition: "Clear",
        humidity: 60,
        wind: 11
    },

    "New York": {
        temperature: 22,
        condition: "Sunny",
        humidity: 55,
        wind: 13
    }
};


// Get Weather
function getWeather(city) {

    if (weatherData[city]) {
        return weatherData[city];
    }

    return null;
}