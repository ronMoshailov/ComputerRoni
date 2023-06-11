 
// Low to High
// Get the button element
const buttonLowToHigh = document.getElementById('btnLowToHigh');

// Add a click event listener to the button
buttonLowToHigh.addEventListener('click', () => {
  // Get the container element with class "allGames"
  const container = document.querySelector('.allGames');

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
 
// High to Low
// Get the button element
const buttonHighToLow = document.getElementById('btnHighToLow');

// Add a click event listener to the button
buttonHighToLow.addEventListener('click', () => {
  // Get the container element with class "allGames"
  const container = document.querySelector('.allGames');

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







// score Low to High
// Get the button element
const buttonScoreLowToHigh = document.getElementById('btnScoreLowToHigh');

// Add a click event listener to the button
buttonScoreLowToHigh.addEventListener('click', () => {
  // Get the container element with class "allGames"
  const container = document.querySelector('.allGames');

  // Get all the div elements with class "row" inside the container
  const divs = Array.from(container.getElementsByClassName('row'));

  // Sort the div elements based on the "data-price" attribute
  divs.sort((a, b) => {
    const priceA = parseInt(a.getAttribute('data-score'));
    const priceB = parseInt(b.getAttribute('data-score'));
    return priceA - priceB;
  });

  // Clear the container
  container.innerHTML = '';

  // Append the sorted div elements back to the container
  divs.forEach(div => {
    container.appendChild(div);
  });
});








// score High to Low
// Get the button element
const buttonScoreHighToLow = document.getElementById('btnScoreHighToLow');

// Add a click event listener to the button
buttonScoreHighToLow.addEventListener('click', () => {
  // Get the container element with class "allGames"
  const container = document.querySelector('.allGames');

  // Get all the div elements with class "row" inside the container
  const divs = Array.from(container.getElementsByClassName('row'));

  // Sort the div elements based on the "data-price" attribute
  divs.sort((a, b) => {
    const priceA = parseInt(a.getAttribute('data-score'));
    const priceB = parseInt(b.getAttribute('data-score'));
    return priceB - priceA;
  });

  // Clear the container
  container.innerHTML = '';

  // Append the sorted div elements back to the container
  divs.forEach(div => {
    container.appendChild(div);
  });
});













function filterNintendoSwitchProducts() {
  // Get the input values from the text boxes
  var minScore = document.getElementById("minScoreFilter").value;
  var maxScore = document.getElementById("maxScoreFilter").value;
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;

  // Get all the rows with the class "row AllProductsBorderSwitch"
  var rows = document.getElementsByClassName("row AllProductsBorderSwitch");

  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var score = row.getAttribute("data-score");
    var price = row.getAttribute("data-price");

    var scoreInRange = true;
    var priceInRange = true;

    if (score) {
      if ((minScore !== "" && parseFloat(score) < parseFloat(minScore)) || (maxScore !== "" && parseFloat(score) > parseFloat(maxScore))) {
        scoreInRange = false;
      }
    }

    if (price) {
      if ((minPrice !== "" && parseFloat(price) < parseFloat(minPrice)) || (maxPrice !== "" && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }

    if (scoreInRange && priceInRange) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}








function filterPS4Products() {
  // Get the input values from the text boxes
  var minScore = document.getElementById("minScoreFilter").value;
  var maxScore = document.getElementById("maxScoreFilter").value;
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;

  // Get all the rows with the class "row AllProductsBorderPS4"
  var rows = document.getElementsByClassName("row AllProductsBorderPS4");

  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var score = row.getAttribute("data-score");
    var price = row.getAttribute("data-price");

    var scoreInRange = true;
    var priceInRange = true;

    if (score) {
      if ((minScore !== "" && parseFloat(score) < parseFloat(minScore)) || (maxScore !== "" && parseFloat(score) > parseFloat(maxScore))) {
        scoreInRange = false;
      }
    }

    if (price) {
      if ((minPrice !== "" && parseFloat(price) < parseFloat(minPrice)) || (maxPrice !== "" && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }

    if (scoreInRange && priceInRange) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}



function filterPS5Products() {
  // Get the input values from the text boxes
  var minScore = document.getElementById("minScoreFilter").value;
  var maxScore = document.getElementById("maxScoreFilter").value;
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;

  // Get all the rows with the class "row AllProductsBorderPS5"
  var rows = document.getElementsByClassName("row AllProductsBorderPS5");

  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var score = row.getAttribute("data-score");
    var price = row.getAttribute("data-price");

    var scoreInRange = true;
    var priceInRange = true;

    if (score) {
      if ((minScore !== "" && parseFloat(score) < parseFloat(minScore)) || (maxScore !== "" && parseFloat(score) > parseFloat(maxScore))) {
        scoreInRange = false;
      }
    }

    if (price) {
      if ((minPrice !== "" && parseFloat(price) < parseFloat(minPrice)) || (maxPrice !== "" && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }

    if (scoreInRange && priceInRange) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}






function filterPCProducts() {
  // Get the input values from the text boxes
  var minScore = document.getElementById("minScoreFilter").value;
  var maxScore = document.getElementById("maxScoreFilter").value;
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;

  // Get all the rows with the class "row AllProductsBorderPC"
  var rows = document.getElementsByClassName("row AllProductsBorderPC");

  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var score = row.getAttribute("data-score");
    var price = row.getAttribute("data-price");

    var scoreInRange = true;
    var priceInRange = true;

    if (score) {
      if ((minScore !== "" && parseFloat(score) < parseFloat(minScore)) || (maxScore !== "" && parseFloat(score) > parseFloat(maxScore))) {
        scoreInRange = false;
      }
    }

    if (price) {
      if ((minPrice !== "" && parseFloat(price) < parseFloat(minPrice)) || (maxPrice !== "" && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }

    if (scoreInRange && priceInRange) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}






function filterXboxSeriesProducts() {
  // Get the input values from the text boxes
  var minScore = document.getElementById("minScoreFilter").value;
  var maxScore = document.getElementById("maxScoreFilter").value;
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;

  // Get all the rows with the class "row AllProductsBorderXboxSeries"
  var rows = document.getElementsByClassName("row AllProductsBorderXboxSeries");

  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var score = row.getAttribute("data-score");
    var price = row.getAttribute("data-price");

    var scoreInRange = true;
    var priceInRange = true;

    if (score) {
      if ((minScore !== "" && parseFloat(score) < parseFloat(minScore)) || (maxScore !== "" && parseFloat(score) > parseFloat(maxScore))) {
        scoreInRange = false;
      }
    }

    if (price) {
      if ((minPrice !== "" && parseFloat(price) < parseFloat(minPrice)) || (maxPrice !== "" && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }

    if (scoreInRange && priceInRange) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}










function filterXboxOneProducts() {
  // Get the input values from the text boxes
  var minScore = document.getElementById("minScoreFilter").value;
  var maxScore = document.getElementById("maxScoreFilter").value;
  var minPrice = document.getElementById("minPriceFilter").value;
  var maxPrice = document.getElementById("maxPriceFilter").value;

  // Get all the rows with the class "row AllProductsBorderXboxOne"
  var rows = document.getElementsByClassName("row AllProductsBorderXboxOne");

  // Loop through the rows and hide/show based on the filter criteria
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var score = row.getAttribute("data-score");
    var price = row.getAttribute("data-price");

    var scoreInRange = true;
    var priceInRange = true;

    if (score) {
      if ((minScore !== "" && parseFloat(score) < parseFloat(minScore)) || (maxScore !== "" && parseFloat(score) > parseFloat(maxScore))) {
        scoreInRange = false;
      }
    }

    if (price) {
      if ((minPrice !== "" && parseFloat(price) < parseFloat(minPrice)) || (maxPrice !== "" && parseFloat(price) > parseFloat(maxPrice))) {
        priceInRange = false;
      }
    }

    if (scoreInRange && priceInRange) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}


