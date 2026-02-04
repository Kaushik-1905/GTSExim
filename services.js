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


