/*
  Hypeweft Studio portfolio content.
  Add new videos under assets/videos/ and add a matching project object here.
*/
const projects = [
  { title: "Motion Study 01", client: "Studio film", kind: "VISUAL STUDY", year: "2026", poster: "assets/posters/clip-01.jpg", video: "assets/videos/clip-01.mp4" },
  { title: "Cinematic Objects", client: "Product film", kind: "BRAND FILM", year: "2026", poster: "assets/posters/clip-02.jpg", video: "assets/videos/clip-02.mp4" },
  { title: "Heritage, Recast", client: "Fashion film", kind: "FASHION", year: "2026", poster: "assets/posters/clip-03.jpg", video: "assets/videos/clip-03.mp4" },
  { title: "Material Language", client: "Product campaign", kind: "CAMPAIGN", year: "2026", poster: "assets/posters/clip-04.jpg", video: "assets/videos/clip-04.mp4" },
  { title: "Modern Heritage", client: "Apparel campaign", kind: "FASHION FILM", year: "2026", poster: "assets/posters/clip-05.jpg", video: "assets/videos/clip-05.mp4" },
  { title: "Studio Cut 01", client: "Studio film · 08 Nov", kind: "STUDIO REEL", year: "2026", poster: "assets/posters/clip-06.jpg", video: "assets/videos/clip-06.mp4" },
  { title: "Studio Cut 02", client: "Studio film · 09 Nov", kind: "STUDIO REEL", year: "2026", poster: "assets/posters/clip-07.jpg", video: "assets/videos/clip-07.mp4" },
  { title: "Studio Cut 03", client: "Studio film · 13 Nov", kind: "STUDIO REEL", year: "2026", poster: "assets/posters/clip-08.jpg", video: "assets/videos/clip-08.mp4" },
  { title: "Studio Cut 04", client: "Studio film · 16 Nov", kind: "STUDIO REEL", year: "2026", poster: "assets/posters/clip-09.jpg", video: "assets/videos/clip-09.mp4" },
  { title: "The Red Edit", client: "Hypeweft · Leather goods", kind: "PRODUCT FILM", year: "2026", poster: "assets/posters/clip-10.jpg", video: "assets/videos/clip-10.mp4" },
  { title: "A Study in Presence", client: "Hypeweft · Fashion campaign", kind: "FASHION FILM", year: "2026", poster: "assets/posters/clip-11.jpg", video: "assets/videos/clip-11.mp4" },
  { title: "Clear Form", client: "Hypeweft · Product film", kind: "PRODUCT FILM", year: "2026", poster: "assets/posters/clip-12.jpg", video: "assets/videos/clip-12.mp4" },
  { title: "Hypeweft, in Motion", client: "Hypeweft · Brand film", kind: "BRAND FILM", year: "2026", poster: "assets/posters/clip-13.jpg", video: "assets/videos/clip-13.mp4" },
  { title: "Unconventional Form", client: "Creative product film", kind: "PRODUCT FILM", year: "2026", poster: "assets/posters/clip-14.jpg", video: "assets/videos/clip-14.mp4" },
  { title: "Time, Reframed", client: "Luxury watch · Product film", kind: "PRODUCT FILM", year: "2026", poster: "assets/posters/clip-15.jpg", video: "assets/videos/clip-15.mp4" },
  { title: "Studio Cut 05", client: "Studio film · 01 Nov", kind: "STUDIO REEL", year: "2026", poster: "assets/posters/clip-16.jpg", video: "assets/videos/clip-16.mp4" },
  { title: "Studio Cut 06", client: "Studio film · 01 Nov", kind: "STUDIO REEL", year: "2026", poster: "assets/posters/clip-17.jpg", video: "assets/videos/clip-17.mp4" },
  { title: "Studio Cut 07", client: "Studio film · 02 Nov", kind: "STUDIO REEL", year: "2026", poster: "assets/posters/clip-18.jpg", video: "assets/videos/clip-18.mp4" },
  { title: "Hypeweft Studio Reel", client: "Studio · 15 Nov", kind: "STUDIO FILM", year: "2026", poster: "assets/posters/hero.jpg", video: "assets/videos/hypeweft-hero.mp4" }
];

const grid = document.querySelector("#work-grid");
const dialog = document.querySelector(".video-modal");
const stage = document.querySelector(".video-stage");
const caption = document.querySelector(".modal-caption");

function renderProjects() {
  grid.innerHTML = "";
  projects.forEach(function(project, index) {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.project = String(index);

    const media = document.createElement("button");
    media.className = "project-media";
    media.type = "button";
    media.setAttribute("aria-label", "Play " + project.title);

    const image = document.createElement("img");
    image.src = project.poster;
    image.alt = project.title + " — " + project.client;
    image.loading = index < 3 ? "eager" : "lazy";
    image.decoding = "async";

    const play = document.createElement("span");
    play.className = "play-button";
    play.setAttribute("aria-hidden", "true");
    const kind = document.createElement("span");
    kind.className = "project-kind mono";
    kind.textContent = project.kind;
    const year = document.createElement("span");
    year.className = "project-year mono";
    year.textContent = project.year;

    media.append(image, play, kind, year);
    const info = document.createElement("div");
    info.className = "project-info";
    const text = document.createElement("div");
    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;
    const client = document.createElement("p");
    client.className = "project-client";
    client.textContent = project.client;
    text.append(title, client);
    const number = document.createElement("span");
    number.className = "project-category mono";
    number.textContent = String(index + 1).padStart(2, "0") + " / " + String(projects.length).padStart(2, "0");
    info.append(text, number);
    card.append(media, info);
    grid.append(card);

    media.addEventListener("click", function() { openProject(project); });
  });
  document.querySelector("#project-count").textContent = projects.length + " FILMS";
  document.querySelector("#hero-index").textContent = "01 / " + String(projects.length).padStart(2, "0");
}

function openProject(project) {
  stage.replaceChildren();
  caption.textContent = project.title + "   /   " + project.kind + " · " + project.year;
  const video = document.createElement("video");
  video.src = project.video;
  video.poster = project.poster;
  video.controls = true;
  video.autoplay = true;
  video.playsInline = true;
  video.preload = "metadata";
  stage.append(video);
  dialog.showModal();
}

document.querySelector(".modal-close").addEventListener("click", function() { dialog.close(); });
dialog.addEventListener("click", function(event) { if (event.target === dialog) dialog.close(); });
dialog.addEventListener("close", function() { stage.replaceChildren(); });

renderProjects();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReducedMotion) {
  document.body.classList.add("no-motion");
  document.querySelector(".hero-video").pause();
}
if (window.gsap && !prefersReducedMotion) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".nav", { y: -26, opacity: 0, duration: 1.1, ease: "power3.out" });
  gsap.from(".hero-content > *", { y: 38, opacity: 0, duration: 1, stagger: 0.14, delay: 0.25, ease: "power3.out" });
  gsap.from(".hero-topline, .hero-foot", { opacity: 0, duration: 1, delay: 0.55, ease: "power2.out" });
  gsap.to(".hero-video", { scale: 1.1, yPercent: 8, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 } });
  if (window.matchMedia("(pointer: fine)").matches) {
    const hero = document.querySelector(".hero");
    const cameraX = gsap.quickTo(".hero-video", "x", { duration: 1.15, ease: "power3.out" });
    const cameraY = gsap.quickTo(".hero-video", "y", { duration: 1.15, ease: "power3.out" });
    hero.addEventListener("pointermove", function(event) {
      const bounds = hero.getBoundingClientRect();
      cameraX(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
      cameraY(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
    });
    hero.addEventListener("pointerleave", function() { cameraX(0); cameraY(0); });
  }
  gsap.utils.toArray(".section-label, .intro-grid, .work-heading, .project-card, .contact-content").forEach(function(el) {
    gsap.from(el, { y: 32, opacity: 0, duration: 0.85, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
  });
  gsap.utils.toArray(".project-media img").forEach(function(img) {
    gsap.fromTo(img, { scale: 1.09 }, { scale: 1, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: img, start: "top 90%", once: true } });
  });
}

