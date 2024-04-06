const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a6d001ccbemsh6d67a7be97c56e4p19172bjsnad726efc17cc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function getWeather(city) {
    try {
        cityName.innerHTML = city;
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
        const data = await response.json(); // Parse JSON response

        // Select HTML elements to update
        const temp = document.getElementById('temp');
        const feels_like = document.getElementById('feels_like');
        const humidity = document.getElementById('humidity');
        const min_temp = document.getElementById('min_temp');
        const max_temp = document.getElementById('max_temp');
        const wind_speed = document.getElementById('wind_speed');
        const wind_degrees = document.getElementById('wind_degrees');
        const sunrise = document.getElementById('sunrise');
        const sunset = document.getElementById('sunset');

        // Update HTML elements with weather data
        temp.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        
        // Convert Unix timestamps to normal time format
        sunrise.innerHTML = unixTimestampToTimeString(data.sunrise);
        sunset.innerHTML = unixTimestampToTimeString(data.sunset);
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})

// Function to convert Unix timestamp to HH:MM:SS format
function unixTimestampToTimeString(unixTimestamp) {
    // Create a new Date object with the Unix timestamp
    const date = new Date(unixTimestamp * 1000);

    // Get the hours, minutes, and seconds from the date object
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Return the time string in HH:MM:SS format
    return `${hours}:${minutes}:${seconds}`;
}

// Call the async function to initiate the fetching process
getWeather("Delhi");
