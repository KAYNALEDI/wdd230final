// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define URL with your API key and Trier's coordinates
const apiKey = '5df24dfc18866f7b09137348d679858a'; // Replace 'your_api_key_here' with your actual API key
const latitude = 49.75;
const longitude = 6.64;
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
