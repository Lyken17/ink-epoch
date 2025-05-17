// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.getAttribute('href') === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
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

// Background Slideshow
const backgroundImages = [
    "images/img2.png",
    "images/img1-red-no-bg.png",
    'images/彩色琉璃独角兽-欧式背景.png',
    'images/折纸小鸟-彩色背景.png',
    'images/透明蝴蝶女孩背景-蓝天草地背景.png',
    'images/翠绿牛油果-画面居中.png'
];

const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

// Initialize slides with images
slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url('${backgroundImages[index]}')`;
});

// Show first slide
slides[0].classList.add('active');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);