// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // --- Existing animations (from earlier) ---

  // Hero text animation
  gsap.from(".hero-content h2", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".cta-button", {
    y: 30,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: "power3.out"
  });

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
      trigger: ".program-grid",
      start: "top 85%",
    },
    y: 100,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out"
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
});
