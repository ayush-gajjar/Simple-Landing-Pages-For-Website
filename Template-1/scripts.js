function redirectToHome() {
    window.location.href = 'index.html';
}
function redirectToShopping() {
    window.location.href = 'shopping.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Redirect to Home Page when clicking the logo
    document.querySelector('.logo').addEventListener('click', redirectToHome);

    // Redirect to Shopping Page from the mobile menu
    document.querySelector('.mobile-nav-links a[href="/shopping"]').addEventListener('click', redirectToShopping);
});




document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});
 


// hero section bg slider 
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
  
    function showSlide(index) {
      if (index >= slides.length) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = index;
      }
      const offset = -currentSlide * 100;
      document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
      
      navDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }
  
    navDots.forEach(dot => {
      dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        showSlide(slideIndex);
      });
    });
  
    // Auto slide every 5 seconds
    setInterval(function() {
      showSlide(currentSlide + 1);
    }, 5000);
  
    // Initial display
    showSlide(currentSlide);
  });
  

  // navbar.js

document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.querySelector('.profile-icon');
    const profileDropdown = document.querySelector('.profile-dropdown');
  
    // Toggle dropdown visibility on profile icon click
    profileIcon.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent click event from propagating to document
      const isDropdownVisible = profileDropdown.classList.contains('visible');
      // Close any open dropdowns
      closeDropdowns();
      if (!isDropdownVisible) {
        profileDropdown.classList.add('visible');
      }
    });
  
    // Close dropdown if clicking outside of it
    document.addEventListener('click', () => {
      closeDropdowns();
    });
  
    function closeDropdowns() {
      profileDropdown.classList.remove('visible');
    }
  });
  