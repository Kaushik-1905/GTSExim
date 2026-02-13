function showMessage() {
  alert(
    "GTS EXIM helps businesses import and export goods with full compliance and transparency."
  );
}

// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// for header
const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});



const links = document.querySelectorAll("nav a");

function setActiveLink() {
  const currentUrl = window.location.href;

  links.forEach(link => {
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

setActiveLink();


// whatsapp function

function openWhatsApp() {
  if (confirm("Do you want to chat with us on WhatsApp?")) {
    window.open(
      "https://wa.me/919157382806?text=Hello%20GTS%20EXIM,%20I%20need%20assistance.",
      "_blank"
    );
  }
}