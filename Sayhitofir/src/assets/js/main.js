// This file contains JavaScript code for interactivity and functionality on the website, such as event listeners and DOM manipulation.

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Scroll animations
const animateOnScroll = () => {
    // Hero section animation
    gsap.from('.hero-content h2', {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
    });

    gsap.from('.cta-button', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });

    // Programs section animation
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.programs',
            start: 'top center+=100',
        },
        duration: 1,
        y: 50,
        opacity: 0
    });

    gsap.from('.program-card', {
        scrollTrigger: {
            trigger: '.program-grid',
            start: 'top center+=100',
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.2
    });
};

// Testimonial slider
class TestimonialSlider {
    constructor() {
        this.slider = document.querySelector('.testimonial-slider');
        this.track = document.querySelector('.testimonial-track');
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.slidesLength = this.slides.length;
        this.interval = null;

        this.initSlider();
    }

    initSlider() {
        this.startAutoPlay();
        this.slider.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.slider.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    moveToSlide(index) {
        this.track.style.transform = `translateX(-${index * 100}%)`;
        this.currentSlide = index;
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slidesLength;
        this.moveToSlide(next);
    }

    startAutoPlay() {
        this.interval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoPlay() {
        clearInterval(this.interval);
    }
}

// Initialize features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    new TestimonialSlider();

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Programs section (added from HTML suggestion)
const programsSection = `
<section id="programs" class="programs">
    <h2 class="section-title">Our Programs</h2>
    <div class="program-grid">
        <article class="program-card">
            <img src="assets/images/fundamentals.jpg" alt="Movement Fundamentals" class="program-image">
            <div class="program-content">
                <h3 class="program-title">Movement Fundamentals</h3>
                <p class="program-description">Master the basics of natural movement patterns and build a strong foundation.</p>
                <a href="#" class="cta-button">Learn More</a>
            </div>
        </article>
        <!-- Add more program cards as needed -->
    </div>
</section>
`;

// Testimonials section (added from HTML suggestion)
const testimonialsSection = `
<section id="testimonials" class="testimonials">
    <h2 class="section-title">What Our Members Say</h2>
    <div class="testimonial-slider">
        <div class="testimonial-track">
            <div class="testimonial-slide">
                <p class="testimonial-text">"Transformed my approach to fitness completely. The focus on natural movement patterns has been revolutionary."</p>
                <p class="testimonial-author">Alex M.</p>
            </div>
            <!-- Add more testimonial slides as needed -->
        </div>
    </div>
</section>
`;

// Append the new sections to the document
document.body.insertAdjacentHTML('beforeend', programsSection);
document.body.insertAdjacentHTML('beforeend', testimonialsSection);