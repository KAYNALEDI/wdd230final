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
    