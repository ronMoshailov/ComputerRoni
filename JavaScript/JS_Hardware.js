
// sort by price low to high
// Get the button element
const buttonLowToHigh = document.getElementById('btnLowToHigh');
// Add a click event listener to the button
buttonLowToHigh.addEventListener('click', () => {
  // Get the container element with class "allHardware"
  const container = document.querySelector('.allHardware');
  // Get all the div elements with class "row" inside the container
  const divs = Array.from(container.getElementsByClassName('row'));
  // Sort the div elements based on the "data-price" attribute
  divs.sort((a, b) => {
    const priceA = parseInt(a.getAttribute('data-price'));
    const priceB = parseInt(b.getAttribute('data-price'));
    return priceA - priceB;
  });
  // Clear the container
  container.innerHTML = '';
  // Append the sorted div elements back to the container
  divs.forEach(div => {
    container.appendChild(div);
  });
});

// sort by price high to low
// Get the button element
const buttonHighToLow = document.getElementById('btnHighToLow');
// Add a click event listener to the button
buttonHighToLow.addEventListener('click', () => {
  // Get the container element with class "allHardware"
  const container = document.querySelector('.allHardware');
  // Get all the div elements with class "row" inside the container
  const divs = Array.from(container.getElementsByClassName('row'));
  // Sort the div elements based on the "data-price" attribute
  divs.sort((a, b) => {
    const priceA = parseInt(a.getAttribute('data-price'));
    const priceB = parseInt(b.getAttribute('data-price'));
    return priceB - priceA;
  });
  // Clear the container
  container.innerHTML = '';
  // Append the sorted div elements back to the container
  divs.forEach(div => {
    container.appendChild(div);
  });
});

// sort by brand A to Z
// Step 1: Get the container for all the hardware elements
const containerAtoZ = document.querySelector('.allHardware');
// Step 2: Get the button with the id "btnNameAtoZ"
const btnNameAtoZ = document.getElementById('btnNameAtoZ');
// Step 3: Add an event listener to the button
btnNameAtoZ.addEventListener('click', sortByNameAtoZ);
// Step 4: Define the event handler function
function sortByNameAtoZ() {
  // Get all the hardware elements
  const elements = Array.from(containerAtoZ.getElementsByClassName('row'));
  // Sort the elements by the "data-brand" attribute
  elements.sort((a, b) => {
    const brandA = a.getAttribute('data-brand').toLowerCase();
    const brandB = b.getAttribute('data-brand').toLowerCase();
    return brandA.localeCompare(brandB);
  });
  // Update the container with the sorted elements
  elements.forEach((element) => {
    containerAtoZ.appendChild(element);
  });
}

// sort by brand Z to A
// Step 1: Get the container for all the hardware elements
const containerZtoA = document.querySelector('.allHardware');
// Step 2: Get the button with the id "btnNameZtoA"
const btnNameZtoA = document.getElementById('btnNameZtoA');
// Step 3: Add an event listener to the button
btnNameZtoA.addEventListener('click', sortByNameZtoA);
// Step 4: Define the event handler function
function sortByNameZtoA() {
  // Get all the hardware elements
  const elements = Array.from(containerZtoA.getElementsByClassName('row'));
  // Sort the elements by the "data-brand" attribute in reverse order
  elements.sort((a, b) => {
    const brandA = a.getAttribute('data-brand').toLowerCase();
    const brandB = b.getAttribute('data-brand').toLowerCase();
    return brandB.localeCompare(brandA);
  });

  // Update the container with the sorted elements
  elements.forEach((element) => {
    containerZtoA.appendChild(element);
  });
}

  // filter Storage
  function filterStorageProducts() {
     // Get the input values from the text boxes
     var minPrice = document.getElementById("minPriceFilter").value;
     var maxPrice = document.getElementById("maxPriceFilter").value;
     var brandFilter = document.getElementById("brandFilter").value.toLowerCase();
     // Get all the rows with the class "row borderForRowStorage"
     var rows = document.getElementsByClassName("row borderForRowStorage");
     // Loop through the rows and hide/show based on the filter criteria
     for (var i = 0; i < rows.length; i++) {
       var row = rows[i];
       var price = row.getAttribute("data-price");
       var brand = row.getAttribute("data-brand").toLowerCase();
       var priceInRange = true;
       var brandMatch = true;
       if (price) {
         if ((minPrice && parseFloat(price) < parseFloat(minPrice)) || (maxPrice && parseFloat(price) > parseFloat(maxPrice))) {
           priceInRange = false;
         }
       }
       if (brandFilter && !brand.includes(brandFilter)) {
         brandMatch = false;
       }
       if (priceInRange && brandMatch) {
         row.style.display = "";
       } else {
         row.style.display = "none";
       }
     }
   }

   // filter CPU
  function filterCPUProducts() {
    // Get the input values from the text boxes
    var minPrice = document.getElementById("minPriceFilter").value;
    var maxPrice = document.getElementById("maxPriceFilter").value;
    var brandFilter = document.getElementById("brandFilter").value.toLowerCase();
    // Get all the rows with the class "row borderForRowCPU"
    var rows = document.getElementsByClassName("row borderForRowCPU");
    // Loop through the rows and hide/show based on the filter criteria
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var price = row.getAttribute("data-price");
      var brand = row.getAttribute("data-brand").toLowerCase();
      var priceInRange = true;
      var brandMatch = true;
      if (price) {
        if ((minPrice && parseFloat(price) < parseFloat(minPrice)) || (maxPrice && parseFloat(price) > parseFloat(maxPrice))) {
          priceInRange = false;
        }
      }
      if (brandFilter && !brand.includes(brandFilter)) {
        brandMatch = false;
      }
      if (priceInRange && brandMatch) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  }

// filter Motherboard
function filterMotherboardProducts() {
  // Get the input values from the text boxes
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;
  var brandFilter = document.getElementById("brandFilter").value.toLowerCase();
  // Get all the rows with the class "row borderForRowMotherboard"
  var rows = document.getElementsByClassName("row borderForRowMotherboard");
  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var price = row.getAttribute("data-price");
    var brand = row.getAttribute("data-brand").toLowerCase();
    var priceInRange = true;
    var brandMatch = true;
    if (price) {
      if ((minPrice && parseFloat(price) < parseFloat(minPrice)) || (maxPrice && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }
    if (brandFilter && !brand.includes(brandFilter)) {
      brandMatch = false;
    }
    if (priceInRange && brandMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

// filter Case
function filterCaseProducts() {
  // Get the input values from the text boxes
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;
  var brandFilter = document.getElementById("brandFilter").value.toLowerCase();
  // Get all the rows with the class "row borderForRowCases"
  var rows = document.getElementsByClassName("row borderForRowCases");
  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var price = row.getAttribute("data-price");
    var brand = row.getAttribute("data-brand").toLowerCase();
    var priceInRange = true;
    var brandMatch = true;
    if (price) {
      if ((minPrice && parseFloat(price) < parseFloat(minPrice)) || (maxPrice && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }
    if (brandFilter && !brand.includes(brandFilter)) {
      brandMatch = false;
    }
    if (priceInRange && brandMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

// filter RAM
function filterRAMProducts() {
   // Get the input values from the text boxes
   var minPrice = document.getElementById("minPriceFilter").value;
   var maxPrice = document.getElementById("maxPriceFilter").value;
   var brandFilter = document.getElementById("brandFilter").value.toLowerCase();
   // Get all the rows with the class "row borderForRowRAM"
   var rows = document.getElementsByClassName("row borderForRowRAM");
   // Loop through the rows and hide/show based on the filter criteria
   for (var i = 0; i < rows.length; i++) {
     var row = rows[i];
     var price = row.getAttribute("data-price");
     var brand = row.getAttribute("data-brand").toLowerCase();
     var priceInRange = true;
     var brandMatch = true;
     if (price) {
       if ((minPrice && parseFloat(price) < parseFloat(minPrice)) || (maxPrice && parseFloat(price) > parseFloat(maxPrice))) {
         priceInRange = false;
       }
     }
     if (brandFilter && !brand.includes(brandFilter)) {
       brandMatch = false;
     }
     if (priceInRange && brandMatch) {
       row.style.display = "";
     } else {
       row.style.display = "none";
     }
   }
 }

 // filter GPU
function filterGPUProducts() {
  // Get the input values from the text boxes
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;
  var brandFilter = document.getElementById("brandFilter").value.toLowerCase();
  // Get all the rows with the class "row borderForRowGPU"
  var rows = document.getElementsByClassName("row borderForRowGPU");
  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var price = row.getAttribute("data-price");
    var brand = row.getAttribute("data-brand").toLowerCase();
    var priceInRange = true;
    var brandMatch = true;
    if (price) {
      if ((minPrice && parseFloat(price) < parseFloat(minPrice)) || (maxPrice && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }
    if (brandFilter && !brand.includes(brandFilter)) {
      brandMatch = false;
    }
    if (priceInRange && brandMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

// filter PS
function filterPSProducts() {
  // Get the input values from the text boxes
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;
  var brandFilter = document.getElementById("brandFilter").value.toLowerCase();
  // Get all the rows with the class "row borderForRowPS"
  var rows = document.getElementsByClassName("row borderForRowPS");
  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var price = row.getAttribute("data-price");
    var brand = row.getAttribute("data-brand").toLowerCase();
    var priceInRange = true;
    var brandMatch = true;
    if (price) {
      if ((minPrice && parseFloat(price) < parseFloat(minPrice)) || (maxPrice && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }
    if (brandFilter && !brand.includes(brandFilter)) {
      brandMatch = false;
    }
    if (priceInRange && brandMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

// filter CPUcooling
function filterCPUcoolingProducts() {
  // Get the input values from the text boxes
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;
  var brandFilter = document.getElementById("brandFilter").value.toLowerCase();
  // Get all the rows with the class "row borderForRowCPUcooling"
  var rows = document.getElementsByClassName("row borderForRowCPUcooling");
  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var price = row.getAttribute("data-price");
    var brand = row.getAttribute("data-brand").toLowerCase();
    var priceInRange = true;
    var brandMatch = true;
    if (price) {
      if ((minPrice && parseFloat(price) < parseFloat(minPrice)) || (maxPrice && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }
    if (brandFilter && !brand.includes(brandFilter)) {
      brandMatch = false;
    }
    if (priceInRange && brandMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

function showPopup() {
  // alert('special Item added to cart.');
  var popup = document.getElementById("popupAdded");
popup.style.display = "block";
setTimeout(function() {
  popup.classList.add("fade-outAdded");
  setTimeout(function() {
    popup.style.display = "none";
    popup.classList.remove("fade-outAdded");
  }, 5000); // Adjust the duration (in milliseconds) as needed
}, 0); // Delay to ensure proper animation
}