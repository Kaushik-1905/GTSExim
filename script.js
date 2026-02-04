function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}


// back to top

const backToTopBtn = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll to top on click
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// Small hover animation enhancement
document.querySelectorAll(".contact-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  });
});


// card scroling

const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".service-card");

let speed = 0.5; // scroll speed
let position = 0;


// Clone cards for infinite effect
cards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

function animate() {
  position += speed;
  const cardWidth = cards[0].offsetWidth + 30;
  const totalWidth = cardWidth * cards.length;

  if (position >= totalWidth) {
    position = 0; // invisible reset
  }

  track.style.transform = `translateX(-${position}px)`;
  requestAnimationFrame(animate);
}

animate();

function goToAbout() {
  sessionStorage.setItem("fromHome", "true");
}

// whatsapp function

function openWhatsApp() {
  if (confirm("Do you want to chat with us on WhatsApp?")) {
    window.open(
      "https://wa.me/919157382806?text=Hello%20GTS%20EXIM,%20I%20need%20assistance.",
      "_blank"
    );
  }
}

