// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form handling
const subscribeForm = document.querySelector('.contact-form');
const emailInput = document.querySelector('.contact-form input');
const subscribeBtn = document.querySelector('.subscribe-btn');

subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (emailInput.value.trim() === '') {
        alert('Please enter your email address');
        return;
    }
    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }
    alert('Thank you for subscribing!');
    emailInput.value = '';
});

// Email validation
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});