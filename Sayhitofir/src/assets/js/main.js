// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Hero text animation
  gsap.from(".hero-title .line", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
  });

  gsap.from(".cta-button", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.8,
    ease: "power3.out"
  });

  // Header background on scroll
  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {
      className: 'header-scrolled',
      targets: 'header'
    }
  });

  // --- Existing animations (from earlier) ---

  // Programs
  gsap.from("#programs h2", {
    scrollTrigger: {
      trigger: "#programs",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from(".program-card", {
    scrollTrigger: {
      trigger: ".programs",
      start: "top center",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
  });

  // Testimonials
  gsap.from("#testimonials h2", {
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1
  });

  gsap.from(".testimonial-slider", {
    scrollTrigger: {
      trigger: ".testimonial-slider",
      start: "top 85%",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)"
  });

  // Contact
  gsap.from("#contact h2", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1
  });

  gsap.from("#contact form", {
    scrollTrigger: {
      trigger: "#contact form",
      start: "top 85%",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  // Footer
  gsap.from("#footer .footer-content", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });

  // --- Parallax Backgrounds ---
  const parallaxSections = [".programs", ".testimonials", ".contact", "#footer"];

  parallaxSections.forEach(section => {
    gsap.to(section, {
      backgroundPosition: "50% 100%", // shifts bg down as you scroll
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",  // start when section enters view
        end: "bottom top",    // end when section leaves view
        scrub: true           // smooth scroll-linked animation
      }
    });
  });

  // --- Header Scroll Effect ---
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });

  // Hero animations
  const tl = gsap.timeline();
  
  tl.to(".hero-title .line", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2
  })
  .to(".hero-subtitle", {
      opacity: 1,
      duration: 1,
      ease: "power3.out"
  }, "-=0.8")
  .to(".cta-button", {
      opacity: 1,
      duration: 1,
      ease: "power3.out"
  }, "-=0.8");

  // Handle image loading
  const images = document.querySelectorAll('.program-card img');
  images.forEach(img => {
      img.style.opacity = '0';
      img.onload = function() {
          gsap.to(this, {
              opacity: 0.7,
              duration: 0.5,
              ease: "power2.out"
          });
      };
  });
});
