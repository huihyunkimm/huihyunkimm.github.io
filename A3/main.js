const body = document.body;
const dots = document.querySelectorAll(".dot");
const field = document.querySelector(".ripple-field");

let rippleTimer = null;
let activeCenter = { x: innerWidth / 2, y: innerHeight / 2 };

// Visual states
function setActive(target) {
  dots.forEach((d) => d.classList.remove("is-active", "is-dimmed"));
  target.classList.add("is-active");
  dots.forEach((d) => {
    if (d !== target) d.classList.add("is-dimmed");
  });
}
function setTheme(mood) {
  body.dataset.theme = mood;
}
function updateActiveCenter(target) {
  const r = target.getBoundingClientRect();
  activeCenter = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

// Peace ripple
function spawnRing() {
  const ring = document.createElement("div");
  ring.className = "ring";
  ring.style.left = `${activeCenter.x}px`;
  ring.style.top = `${activeCenter.y}px`;
  field.appendChild(ring);
  ring.addEventListener("animationend", () => ring.remove());
}
function startPeaceLoop() {
  stopPeaceLoop();
  spawnRing();
  rippleTimer = setInterval(spawnRing, 1400);
}
function stopPeaceLoop() {
  if (rippleTimer) {
    clearInterval(rippleTimer);
    rippleTimer = null;
  }
  field.querySelectorAll(".ring").forEach((r) => r.remove());
}

// Mood switch
function setMood(mood, target) {
  stopPeaceLoop();

  body.dataset.state = mood;
  setTheme(mood);

  if (target) updateActiveCenter(target);
  if (mood === "peace") startPeaceLoop();
}

// Bind
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const mood = dot.dataset.mood;
    setMood(mood, dot);
    setActive(dot);
  });
});
