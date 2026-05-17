const nav = document.getElementById("site-nav");
const toggle = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

window.addEventListener("scroll", () => {
  nav?.classList.toggle("scrolled", window.scrollY > 10);
});

toggle?.addEventListener("click", () => {
  links?.classList.toggle("open");
});

const currentPath = window.location.pathname;
document.querySelectorAll(".nav-links a").forEach((a) => {
  const href = a.getAttribute("href");
  const shortPath = currentPath.split("/").pop();
  if (href === currentPath || href === shortPath || (currentPath === "/" && href === "/index.html")) {
    a.classList.add("active");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll("section, .timeline-item, .card, .project-card, .media-card")
  .forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

const missionStart = new Date("2026-05-01");
const today = new Date();
const days = Math.floor((today - missionStart) / (1000 * 60 * 60 * 24));
const daysEl = document.getElementById("days-counter");
if (daysEl) {
  let count = 0;
  const interval = setInterval(() => {
    count = Math.min(count + Math.ceil(days / 40), days);
    daysEl.textContent = count;
    if (count >= days) clearInterval(interval);
  }, 30);
}

const lightbox = document.getElementById("image-lightbox");
const lightboxImg = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

document.querySelectorAll('img[data-lightbox="true"], img.zoomable').forEach((img) => {
  img.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || "";
    lightbox.classList.add("open");
  });
});

lightboxClose?.addEventListener("click", () => lightbox?.classList.remove("open"));
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox?.classList.remove("open");
});
