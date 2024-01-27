document.addEventListener('DOMContentLoaded', function () {
    var hamburgerButton = document.getElementById('hamburger');
    var navMenu = document.querySelector('.nav-menu');

    hamburgerButton.addEventListener('click', function () {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });
});

//Weather API
document.addEventListener('DOMContentLoaded', function () {
    var hamburgerButton = document.getElementById('hamburger');
    var navMenu = document.querySelector('.nav-menu');

    hamburgerButton.addEventListener('click', function () {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });

    var weatherInfo = document.getElementById('weatherInfo');
    var visitsInfo = document.getElementById('visitsInfo');

    function fetchData() {
        var apiKey = '6d8c5898712d593794cc83411b1e998d';
        var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=' + apiKey;

        fetch(weatherApiUrl)
            .then(response => response.json())
            .then(data => {
                var weatherDescription = data.weather[0].description;
                var temperature = Math.round(data.main.temp - 273.15);

                weatherInfo.textContent = 'Weather: ' + weatherDescription + ', ' + temperature + '°C';
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.textContent = 'Weather: Error fetching data';
            });

        // Simulate fetching real visit data using the Random User Generator API
        var visitApiUrl = 'https://randomuser.me/api/?results=1';

        fetch(visitApiUrl)
            .then(response => response.json())
            .then(data => {
                // Extract the number of visits (simulated data)
                var fakeVisitsData = Math.floor(Math.random() * 1000); // Simulating visits data

                visitsInfo.textContent = 'Visits: ' + fakeVisitsData;
            })
            .catch(error => {
                console.error('Error fetching visit data:', error);
                visitsInfo.textContent = 'Visits: Error fetching data';
            });
    }

    fetchData();
});
