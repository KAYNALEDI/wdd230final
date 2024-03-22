document.addEventListener('DOMContentLoaded', function () {
    var hamburgerButton = document.getElementById('hamburger');
    var navMenu = document.querySelector('.nav-menu');

    hamburgerButton.addEventListener('click', function () {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });
});

//Weather API
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define URL with your API key and Coral Gables' coordinates
const apiKey = '5df24dfc18866f7b09137348d679858a'; // Replace '5df24dfc18866f7b09137348d679858a' with your actual API key
const latitude = 25.7211;
const longitude = -80.2684;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Define asynchronous function to fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

// Function to display weather results
function displayResults(data) {
  // Display current temperature
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  
  // Display weather icon
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);

  // Capitalize each word of the weather description
  let desc = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Display weather description
  captionDesc.textContent = `${desc}`;
}


// Function to fetch the number of visits from a server-side endpoint
function fetchVisits() {
    // Simulating an asynchronous HTTP request
    setTimeout(() => {
        // Assuming you have a server-side endpoint that returns the number of visits
        // In this example, I'm just setting a dummy value of 100 as the number of visits
        const visits = 100;

        // Update the visits placeholder text with the actual number of visits
        document.getElementById('visitsPlaceholder').textContent = visits;
    }, 1000); // Simulating 1 second delay for the HTTP request
}

// Call the fetchVisits function to update the visits placeholder when the page loads
fetchVisits();