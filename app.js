document.getElementById('checkWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value.trim().toLowerCase();

    // Hardcoded weather data for specific cities
    const weatherData = {
        'karachi': { temp: 22, description: 'Sunny' },
        'islamabad': { temp: 18, description: 'Cloudy' },
        'hyderabad': { temp: 20, description: 'Rainy' },
        'quetta': { temp: 25, description: 'Clear Sky' },
        'lahore': { temp: 24, description: 'Partly Cloudy' }
    };

    // Check if the entered city exists in the data
    if (weatherData[city]) {
        const { temp, description } = weatherData[city];

        // Display weather information
        document.getElementById('cityName').innerText = `City: ${city.charAt(0).toUpperCase() + city.slice(1)}`;
        document.getElementById('temperature').innerText = `Temperature: ${temp}°C`;
        document.getElementById('description').innerText = `Description: ${description}`;
    } else {
        // If city not found, display an error message
        document.getElementById('cityName').innerText = `City not found`;
        document.getElementById('temperature').innerText = ``;
        document.getElementById('description').innerText = ``;
    }
});
