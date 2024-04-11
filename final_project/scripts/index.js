<!----JavaScript for toggle menu---->

    var navLinks = document.getElementById("navLinks");

    function showMenu() {
        navLinks.style.right = "0";
    }

    function hideMenu() {
        navLinks.style.right = "-200px";
    }




 var navLinks = document.getElementById("navLinks");

 function showMenu() {
     navLinks.style.right = "0";
 }

 function hideMenu() {
     navLinks.style.right = "-200px";
 }

    // JavaScript code
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Redirect to thankyou.html after form submission
        window.location.href = "thankyou.html";
    });



    // rental html

    document.addEventListener('DOMContentLoaded', function() {
        fetch('rental_prices.json')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#rentalTable tbody');
                data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.rental_type}</td>
                        <td>${item.max_persons}</td>
                        <td>${item.reservation_half_day}</td>
                        <td>${item.reservation_full_day}</td>
                        <td>${item.walk_in_half_day}</td>
                        <td>${item.walk_in_full_day}</td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching JSON:', error));
    });
    
    function myFunction(imgs) {
        // Get the expanded image
        var expandImg = document.getElementById("expandedImg");
        // Get the image text
        var imgText = document.getElementById("imgtext");
        // Use the same src in the expanded image as the image being clicked on from the grid
        expandImg.src = imgs.src;
        // Use the value of the alt attribute of the clickable image as text inside the expanded image
        imgText.innerHTML = imgs.alt;
        // Show the container element (hidden with CSS)
        expandImg.parentElement.style.display = "block";
      }

    //   Weather
      document.addEventListener('DOMContentLoaded', function() {
        const apiKey = '3ae74244db602875dd68507a1622ff5f';
        const city = 'Cozumel'; 
    
        // Fetch current weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('current-temp').textContent = `${data.main.temp}°C`;
                document.getElementById('current-humidity').textContent = `${data.main.humidity}%`;
                
                // Fetch forecast for tomorrow
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
                    .then(response => response.json())
                    .then(data => {
                        const tomorrow = new Date();
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        const tomorrowDate = tomorrow.toISOString().split('T')[0];
    
                        const forecast = data.list.find(entry => entry.dt_txt.includes(tomorrowDate) && entry.dt_txt.includes('15:00:00'));
                        if (forecast) {
                            document.getElementById('forecast-temp').textContent = `${forecast.main.temp}°C`;
                        }
    
                        // Display all weather data points
                        const weatherDetails = document.getElementById('weather-details');
                        data.list.forEach(entry => {
                            const weather = entry.weather[0];
                            weatherDetails.innerHTML += `
                                <div>
                                    <p><strong>Main:</strong> ${weather.main}</p>
                                    <p><strong>Description:</strong> ${weather.description}</p>
                                    <img src="http://openweathermap.org/img/wn/${weather.icon}.png" alt="Weather Icon">
                                </div>
                            `;
                        });
                    })
                    .catch(error => console.error('Error fetching forecast data:', error));
            })
            .catch(error => console.error('Error fetching current weather data:', error));
    });



// Simulated function to get the high temperature for the day
function getHighTemperature() {
  // Simulated temperature data, replace with actual API call
  return Math.floor(Math.random() * 20) + 20; // Random temperature between 20 and 40
}

// Function to update the banner with the high temperature
function updateBannerWithTemperature() {
  const temperatureElement = document.getElementById('temperature');
  const tempMax = getHighTemperature();
  temperatureElement.textContent = `High Temperature: ${tempMax}°C`;
}

// Update banner with temperature when the page loads
updateBannerWithTemperature();

// Add event listener to close button
document.querySelector('.close-button').addEventListener('click', function() {
  document.getElementById('announcementBanner').style.display = 'none';
});
