document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky header
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Automatic slider
    const heroSection = document.getElementById('hero');
    const images = ['yo/Homepage1.jpg', 'yo/Homepage2.jpg', 'yo/Homepage3.jpg', 'yo/Homepage4.jpg' , 'yo/Homepage5.jpg'];
    let currentImageIndex = 0;

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }, 5000);
});


    document.addEventListener('DOMContentLoaded', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.querySelector('.nav-list');

        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    });

