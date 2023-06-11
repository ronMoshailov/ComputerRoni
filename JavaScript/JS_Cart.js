

$(document).ready(function() {
    // Function to handle the AddToCartButton click event
    function handleAddToCartButtonClick() {
      // Get the parent row element of the clicked button
      var rowElement = $(this).closest('.normalProd');

      // Get the previously stored items from local storage
      var storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
      // Add the current row HTML to the array
      storedItems.push(rowElement.html());
  
      // Store the updated array in the local storage
      localStorage.setItem('cartItems', JSON.stringify(storedItems));

      // Provide feedback to the user
      alert('normal Item added to cart.');
  
      // Optionally, you can redirect the user to the cart page or perform any other action.
      // For example:
      // window.location.href = 'cart.html';
    }
  


    function handleAddToCartButtonClickSP() {
        // Get the parent row element of the clicked button
        var rowElementSO = $(this).closest('.SOproduct');

        // Get the previously stored items from local storage
        var storedItemsSO = JSON.parse(localStorage.getItem('cartItemsSP')) || [];
    
        // Add the current row HTML to the array
        storedItemsSO.push(rowElementSO.html());
    
        // Store the updated array in the local storage
        localStorage.setItem('cartItemsSP', JSON.stringify(storedItemsSO));

        // Provide feedback to the user
        alert('special Item added to cart.');
    
        // Optionally, you can redirect the user to the cart page or perform any other action.
        // For example:
        // window.location.href = 'cart.html';
      }




    // Attach click event handler to all AddToCartButton buttons
    $('.AddToCartButton').click(handleAddToCartButtonClick);
    $('.AddToCartButtonSP').click(handleAddToCartButtonClickSP);
  
    // Retrieve the stored items from the local storage
    var storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Retrieve the stored items from the local storage
    var storedItemsSP = JSON.parse(localStorage.getItem('cartItemsSP')) || [];

    // Get the container element
    var container = $('.containerOfAllTheItems');
  
    // Get the container element
    var containerSP = $('.SOproduct');

    // Loop through the stored items and append them to the container
    for (var i = 0; i < storedItems.length; i++) {
      var item = storedItems[i];
      var divElement = $('<div class="row AllProductsBorderCart"></div>').html(item);
      container.append(divElement);
    }
  
    // Loop through the stored items and append them to the container
    for (var i = 0; i < storedItemsSP.length; i++) {
        var itemSP = storedItemsSP[i];
        var divElementSP = $('<div class="AllProductsBorderCartSP col-lg-6 col-12"></div>').html(itemSP);
        containerSP.append(divElementSP);
      }

    // Add hover animation to AddToCartButton buttons
    $(".AddToCartButton").hover(function() {
      $(this).animate({ backgroundColor: "#ff69b4" }, 1000); // Transition to pink with 1s duration
    }, function() {
      $(this).animate({ backgroundColor: "#2dcd0d" }, 1000); // Transition to original color with 1s duration
    });

  });
  


  const resetCartButton = document.querySelector('.ResetCartButton');
  const productCartDiv = document.querySelector('.SOproductCart');

  resetCartButton.addEventListener('click', () => {
    // Clear the cart items in localStorage
    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartItemsSP');

    // Clear the cart display
    productCartDiv.innerHTML = '';

  });