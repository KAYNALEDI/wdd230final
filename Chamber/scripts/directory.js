// JavaScript code
// Sample data for the directory (you can replace it with your own data)
var companies = [
    {
                "name": "Mad Giant Brewery",
                "address": "1 Fox Street, Ferreirasdorp, Johannesburg, 2048",
                "phone": "+27 10 446 6555",
                "website": "https://www.madgiant.co.za/",
                "activities": ["Craft Beer Tasting", "Brewery Tours"]
            },
            {
                "name": "The Westcliff Hotel",
                "address": "67 Jan Smuts Ave, Saxonwold, Johannesburg, 2196",
                "phone": "+27 11 481 6000",
                "website": "https://www.westcliff.co.za/",
                "activities": ["Fine Dining", "Spa & Wellness", "Scenic Views"]
            },
            {
                "name": "Constitution Hill",
                "address": "11 Kotze St, Braamfontein, Johannesburg, 2017",
                "phone": "+27 11 381 3100",
                "website": "https://www.constitutionhill.org.za/",
                "activities": ["Historical Tours", "Museum Visits", "Art Exhibitions"]
            },
            {
                "name": "Maboneng Precinct",
                "address": "286 Fox St, City and Suburban, Johannesburg, 2094",
                "phone": "+27 10 900 4987",
                "website": "https://www.maboneng.com/",
                "activities": ["Arts & Culture", "Street Art Tours", "Dining and Cafés"]
            },
            {
                "name": "Lion & Safari Park",
                "address": "R512 Pelindaba Rd, Broederstroom, 0240",
                "phone": "+27 87 150 0100",
                "website": "https://www.lionandsafaripark.com/",
                "activities": ["Safari Tours", "Animal Interactions", "Outdoor Adventure"]
            },
            {
                "name": "Origins Centre",
                "address": "Yale Rd, University of the Witwatersrand, Johannesburg, 2050",
                "phone": "+27 11 717 4700",
                "website": "https://www.origins.org.za/",
                "activities": ["Archaeological Exhibits", "Educational Programs"]
            },
            {
                "name": "Moyo Zoo Lake",
                "address": "Zoo Lake Park, 1 Prince of Wales Dr, Parkwood, Johannesburg, 2193",
                "phone": "+27 11 591 1207",
                "website": "https://www.moyo.co.za/",
                "activities": ["African Cuisine", "Live Entertainment", "Cultural Experiences"]
            },
            {
                "name": "Johannesburg Botanical Garden",
                "address": "Olifants Rd, Emmarentia, Johannesburg, 2195",
                "phone": "+27 11 782 7064",
                "website": "https://www.jhbcityparks.com/",
                "activities": ["Botanical Tours", "Picnics", "Nature Walks"]
            },
            {
                "name": "Apartheid Museum",
                "address": "Northern Park Way and Gold Reef Rd, Ormonde, Johannesburg, 2001",
                "phone": "+27 11 309 4700",
                "website": "https://www.apartheidmuseum.org/",
                "activities": ["Historical Exhibits", "Interactive Displays", "Guided Tours"]
            },
            {
                "name": "Neighbourgoods Market",
                "address": "73 Juta St, Braamfontein, Johannesburg, 2000",
                "phone": "+27 82 370 4075",
                "website": "https://www.neighbourgoodsmarket.co.za/",
                "activities": ["Local Food Market", "Artisanal Products", "Live Music"]
            }
        ]
        
  
  
  // Function to generate the HTML for each company item in list view
  function generateCompanyItem(company) {
    var activities = company.activities.map(function(activity) {
        return `<li>${activity}</li>`;
    }).join('');
  
    return `
        <li class="company-list-item">
            <h3>${company.name}</h3>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><strong>Website:</strong> <a href="${company.website}">${company.website}</a></p>
            <p><strong>Activities:</strong></p>
            <ul>${activities}</ul>
        </li>
    `;
  }
  
  // Function to generate the HTML for each company item in grid view
  function generateCompanyCard(company) {
    var activities = company.activities.map(function(activity) {
        return `<li>${activity}</li>`;
    }).join('');
  
    return `
        <div class="company-card">
            <h3>${company.name}</h3>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><strong>Website:</strong> <a href="${company.website}">${company.website}</a></p>
            <p><strong>Activities:</strong></p>
            <ul>${activities}</ul>
        </div>
    `;
  }
  
  // Function to populate the company list
  function populateCompanyList() {
    var companyList = document.getElementById("company-list");
    var companyItems = "";
  
    companies.forEach(function(company) {
        companyItems += generateCompanyItem(company);
    });
  
    companyList.innerHTML = companyItems;
  }
  
  // Function to populate the company grid
  function populateCompanyGrid() {
    var companyGrid = document.getElementById("company-grid");
    var companyCards = "";
  
    companies.forEach(function(company) {
        companyCards += generateCompanyCard(company);
    });
  
    companyGrid.innerHTML = companyCards;
  }
  
  // Function to switch between list and grid views
  function switchView(view) {
    var listViewBtn = document.getElementById("list-view-btn");
    var gridViewBtn = document.getElementById("grid-view-btn");
    var companyList = document.getElementById("company-list");
    var companyGrid = document.getElementById("company-grid");
  
    if (view === "list") {
        listViewBtn.classList.add("active");
        gridViewBtn.classList.remove("active");
        companyList.style.display = "block";
        companyGrid.style.display = "none";
    } else if (view === "grid") {
        listViewBtn.classList.remove("active");
        gridViewBtn.classList.add("active");
        companyList.style.display = "none";
        companyGrid.style.display = "grid";
    }
  }
  
  // Call the function to populate the company list and grid
  populateCompanyList();
  populateCompanyGrid();
  