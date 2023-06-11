// // menu
// const navbarMenu = document.getElementById("navbarMenu");
// const navbarToggler = document.querySelector(".navbar-toggler");
// const mobileHardware = document.querySelector(".mobileHardware");
// const mobileGames = document.querySelector(".mobileGames");
// const submenu = document.querySelector(".submenu");

// navbarToggler.addEventListener("click", function() {
//     navbarMenu.classList.toggle("active");
// });

// mobileHardware.addEventListener("click", function(e) {
//   e.preventDefault();
//   mobileHardware.classList.add("active");
//   mobileGames.classList.remove("active");
//   submenu.classList.add("active");
// });

// mobileGames.addEventListener("click", function(e) {
//   e.preventDefault();
//   mobileGames.classList.add("active");
//   mobileHardware.classList.remove("active");
//   submenu.classList.add("active");
// });
    
// window.addEventListener("DOMContentLoaded", function() {
//     var navigation = document.querySelector("nav");
//     var mobilenavigation = document.querySelector(".navbar");
//     var screenWidth = window.innerWidth;

//     function toggleNavigation() {
//         if (screenWidth <= 400) {
//             navigation.style.display = "none";
//             mobilenavigation.style.display = "block";
//         }
//         else {
//             navigation.style.display = "block";
//             mobilenavigation.style.display = "none";
//         }

//     }

//     toggleNavigation();

//     window.addEventListener("resize", function() {
//         screenWidth = window.innerWidth;
//         toggleNavigation();
//     });
// });




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
  
  

  });
  
  
  
  




// timer
$(document).ready(function() {
    var openingTime = 8; // Shop opening hour (24-hour format)
    var closingTime = 17; // Shop closing hour (24-hour format)

    var today = new Date();
    var currentHour = today.getHours();

    var timerElement = $("#timer");

    if (currentHour < openingTime || currentHour >= closingTime) {
        timerElement.text("Closed");
    } else {
        var remainingHours = closingTime - currentHour - 1; // Subtract 1 from remainingHours
        var remainingMinutes = 60 - today.getMinutes();
        var remainingSeconds = 60 - today.getSeconds();

        var countdown = remainingHours + "h " + remainingMinutes + "m " + remainingSeconds + "s";
        timerElement.text(countdown);

        setInterval(function() {
            if (remainingSeconds > 0) {
                remainingSeconds--;
            } else {
                remainingSeconds = 59;
                if (remainingMinutes > 0) {
                    remainingMinutes--;
                } else {
                    remainingMinutes = 59;
                    if (remainingHours > 0) {
                        remainingHours--;
                    } else {
                        timerElement.text("Closed");
                        return;
                    }
                }
            }
            
            countdown = remainingHours + "h " + remainingMinutes + "m " + remainingSeconds + "s";
            timerElement.text(countdown);
        }, 1000);
    }
});





window.onload = function () {
    // window.addEventListener('scroll', function (e) {
    //   if (window.pageYOffset > 100) {
    //     document.querySelector("header").classList.add('is-scrolling');
    //   } else {
    //     document.querySelector("header").classList.remove('is-scrolling');
    //   }
    // });
  
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const close_btn = document.querySelector('.hamburgerClose');
  
    menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
    });
  
    close_btn.addEventListener('click', function () {
      menu_btn.classList.remove('is-active');
      mobile_menu.classList.remove('is-active');
    });
  }


  