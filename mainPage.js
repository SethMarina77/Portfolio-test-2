document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("main-header");
    var navbar = document.getElementById("main-navbar");
    var lastScroll = 0;
  
    window.addEventListener("scroll", function () {
      var currentScroll = window.scrollY;
  
      // Hide header and move navbar up when scrolling down
      if (currentScroll > lastScroll) {
        header.style.opacity = "0";
        navbar.style.top = "0";
      } else {
        header.style.opacity = "1";
        navbar.style.top = "-100px"; // Adjust based on your header height
      }
  
      lastScroll = currentScroll;
    });
  });
  