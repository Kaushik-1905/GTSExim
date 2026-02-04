(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("status");
    status.style.color = "#000";
    status.innerText = "Sending...";

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID", 
      this
    ).then(
      () => {
        status.style.color = "green";
        status.innerText = "Enquiry sent successfully!";
        this.reset();
      },
      (error) => {
        status.style.color = "red";
        status.innerText = "Failed to send. Please try again!";
        console.error(error);
      }
    );
  });

});
