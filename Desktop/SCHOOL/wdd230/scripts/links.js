const baseURL = "https://kaynaledi.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    // Uncomment the line below when you're satisfied with the JSON result
    // displayLinks(data);
  }
  
  getLinks();
  function displayLinks(weeks) {
    // Assuming you have an existing HTML structure for the activity links
    const linksContainer = document.getElementById("activity-links-container");
  
    // Loop through each week in the data
    weeks.lessons.forEach((week) => {
      // Process each link within the week
      week.links.forEach((link) => {
        // Create a link element
        const linkElement = document.createElement("a");
        linkElement.href = `${baseURL}${link.url}`;
        linkElement.textContent = link.title;
  
        // Append the link to the container
        linksContainer.appendChild(linkElement);
      });
    });
  }
    