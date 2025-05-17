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
        alert('请输入您的邮箱地址');
        return;
    }
    if (!isValidEmail(emailInput.value)) {
        alert('请输入有效的邮箱地址');
        return;
    }
    alert('感谢您的订阅！');
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

// Change slide every 1 seconds
setInterval(nextSlide, 1000);

// 产品滑动卡片逻辑
(function() {
    const slider = document.querySelector('.product-slider');
    const slides = document.querySelectorAll('.product-slide');
    const leftBtn = document.querySelector('.slider-arrow-left');
    const rightBtn = document.querySelector('.slider-arrow-right');
    let currentIndex = 0;
    const slideCount = slides.length;
    let autoPlayTimer = null;
    let isHovered = false;

    function scrollToIndex(index) {
        const slideWidth = slides[0].offsetWidth + 20; // 20px margin
        slider.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        scrollToIndex(currentIndex);
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        scrollToIndex(currentIndex);
    }

    leftBtn.addEventListener('click', prevSlide);
    rightBtn.addEventListener('click', nextSlide);

    // 自动轮播
    function startAutoPlay() {
        if (autoPlayTimer) return;
        autoPlayTimer = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 1000);
    }
    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
    }
    slider.addEventListener('mouseenter', function() {
        isHovered = true;
    });
    slider.addEventListener('mouseleave', function() {
        isHovered = false;
    });
    startAutoPlay();

    // 移动端滑动支持
    let startX = 0;
    let scrollLeft = 0;
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX;
        const walk = startX - x;
        slider.scrollLeft = scrollLeft + walk;
    });
})();