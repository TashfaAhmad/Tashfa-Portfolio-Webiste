const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 100;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
    });
  }
}

function updateStars() {
  for (let star of stars) {
    star.x += star.speed;
    if (star.x > canvas.width) {
      star.x = 0;
      star.y = Math.random() * canvas.height;
    }
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  updateStars();
  drawStars();
  requestAnimationFrame(animate);
}

resizeCanvas();
createStars();
animate();

window.addEventListener("resize", () => {
  resizeCanvas();
  createStars();
});