/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Define the function to close the banner
function closeBanner() {
  document.querySelector('.banner').style.display = 'none'; // Hide the banner when the close button is clicked
}

// Attach the click event listener to the close button
document.querySelector('.close-button').addEventListener('click', closeBanner);

