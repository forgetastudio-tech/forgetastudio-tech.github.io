
// ===== NAVBAR ACTIVE =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});


// ===== SMOOTH SCROLL (CLICK MENU) =====
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    const offset = 90;
    const top = target.offsetTop - offset;

    window.scrollTo({
      top: top,
      behavior: "smooth"
    });

    // highlight section
    target.classList.add("section-highlight");

    setTimeout(() => {
      target.classList.remove("section-highlight");
    }, 600);
  });
});


// ===== SCROLL ANIMATION =====
const elements = document.querySelectorAll(".fade-up, .zoom-in, .slide-left");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));


// ===== HERO BACKGROUND FADE =====
const images = [
  "image/Screenshot1.png",
  "image/Screenshot2.png",
  "image/Screenshot3.png"
];

let index = 0;
let currentIndex = 0;

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

if (bg1 && bg2) {
  bg1.style.backgroundImage = `url(${images[0]})`;
  bg1.classList.add("active");

  function changeImage() {
    index = (index + 1) % images.length;

    let nextBg = currentIndex === 0 ? bg2 : bg1;
    let currentBg = currentIndex === 0 ? bg1 : bg2;

    nextBg.style.backgroundImage = `url(${images[index]})`;
    nextBg.classList.add("active");
    currentBg.classList.remove("active");

    currentIndex = currentIndex === 0 ? 1 : 0;
  }

  setInterval(changeImage, 4000);
}


// ===== PARALLAX =====
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (bg1 && bg2) {
    bg1.style.backgroundPosition = `center ${scrollY * 0.4}px`;
    bg2.style.backgroundPosition = `center ${scrollY * 0.4}px`;
  }
});


// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  navbar.classList.toggle("scrolled", window.scrollY > 50);
});


function playVideo() {
  const iframe = document.getElementById("videoFrame");
  const btn = document.querySelector(".play-btn");

  iframe.style.display = "block";
  iframe.src = "https://www.youtube.com/embed/8Crl02nHYtQ?autoplay=1";

  btn.classList.add("hide");
}