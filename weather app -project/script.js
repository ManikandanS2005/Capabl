const API_KEY = 'bd9fc0411199bd65199ecca287528da7';

function fetchWeather() {
    const city = document.getElementById('city-input').value.trim();
    if (!city) return alert('Please enter a city!');

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('City not found');
            return response.json();
        })
        .then(data => {
            const locationData = data.city;
            const forecastData = data.list;

            // Current weather (first item in the list)
            const currentWeather = forecastData[0];

            document.getElementById('location').innerText = locationData.name;
            document.getElementById('temperature').innerText = `Temperature: ${currentWeather.main.temp} °C`;
            document.getElementById('humidity').innerText = `Humidity: ${currentWeather.main.humidity} %`;
            document.getElementById('conditions').innerText = `Conditions: ${currentWeather.weather[0].description}`;

            // Update the 5-day forecast
            const forecastContainer = document.getElementById('forecast');
            forecastContainer.innerHTML = ''; // Clear previous forecast

            // Group data by date for 5-day forecast
            const forecastByDay = {};

            forecastData.forEach(item => {
                const date = item.dt_txt.split(' ')[0];
                if (!forecastByDay[date]) {
                    forecastByDay[date] = item;
                }
            });

            Object.values(forecastByDay).slice(0, 5).forEach(day => {
                const forecastCard = document.createElement('div');
                forecastCard.classList.add('forecast-card');

                // Adding weather icon
                const iconCode = day.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
                const iconImg = document.createElement('img');
                iconImg.src = iconUrl;
                forecastCard.appendChild(iconImg);

                // Day and Temperature
                const dayText = document.createElement('p');
                dayText.innerText = new Date(day.dt * 1000).toLocaleDateString();
                forecastCard.appendChild(dayText);

                const tempText = document.createElement('p');
                tempText.innerText = `${day.main.temp} °C`;
                forecastCard.appendChild(tempText);

                forecastContainer.appendChild(forecastCard);
            });
        })
        .catch(error => {
            alert('Failed to fetch weather data.');
            console.error(error);
        });
}

// Function to check Enter key
function checkEnter(event) {
    if (event.key === 'Enter') {
        fetchWeather();
    }
}
