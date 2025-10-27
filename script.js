// Back to top button logic
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) backToTop.style.display = "block";
  else backToTop.style.display = "none";
});
backToTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// Scroll animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Certificate Modal Logic
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("certificateImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".certificate-card").forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.getAttribute("data-img");
    modal.style.display = "block";
    modalImg.src = imgSrc;
  });
});

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
