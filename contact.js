document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (toggle && navMenu) {
      toggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
    }


    /* ================= ACTIVE NAV LINK ================= */
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname;

    links.forEach(link => {
      const linkPath = new URL(link.href).pathname;

      if (linkPath === currentPage) {
        link.classList.add("active");
      }

      // For index.html sections like #services
      if (currentPage.includes("index") && link.href.includes("#services")) {
        link.classList.add("active");
      }
    });


    /* ================= CONTACT FORM ================= */
    const form = document.getElementById("form");

    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      // 🔴 Replace with your Web3Forms access key
      formData.append("access_key", "e56b4b83-db9f-479b-baaa-69f2805380a6");

      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (response.ok) {
          alert("✅ Success! Your message has been sent.");
          form.reset();
        } else {
          alert("❌ Error: " + data.message);
        }

      } catch (error) {
        alert("⚠️ Something went wrong. Please try again.");
        console.error(error);
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });

  });

});


// whatsapp function

function openWhatsApp() {
  if (confirm("Do you want to chat with us on WhatsApp?")) {
    window.open(
      "https://wa.me/919157382806?text=Hello%20GTS%20EXIM,%20I%20need%20assistance.",
      "_blank"
    );
  }
}



