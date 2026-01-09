// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  mobileMenuBtn.classList.toggle("active")
})

// Close mobile menu when clicking a link
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    mobileMenuBtn.classList.remove("active")
  })
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add active state to nav links on scroll
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add scroll effect to header
const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "none"
  }
})

const typewriterText = document.querySelector(".typewriter")
if (typewriterText) {
  const text = typewriterText.textContent
  typewriterText.textContent = ""
  let i = 0

  function typeWriter() {
    if (i < text.length) {
      typewriterText.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 50)
    }
  }

  // Start typewriter after a short delay
  setTimeout(typeWriter, 500)
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards and sections
document
  .querySelectorAll(".skill-card, .project-card, .cert-card, .education-card, .contact-card, .highlight-card")
  .forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    observer.observe(el)
  })
