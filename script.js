
// Mobile Menu Toggle Functionality
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Mobile menu toggle
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('mobile-menu');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here we would typically send the form data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}
//for view details button functionality
// This function toggles the visibility of the extra details section
function toggleDetails(button) {
    const details = button.nextElementSibling.nextElementSibling; // goes to .extra-details
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      details.style.maxHeight = "300px";
      details.style.transition = "all 0.3s ease-in-out";
      button.textContent = "Hide Details";
    } else {
      details.style.display = "none";
      button.textContent = "View Details";
    }
  }
// Animation on scroll functionality
// You can add more interactive features here as you learn more JavaScript
