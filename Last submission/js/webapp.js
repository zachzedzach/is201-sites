const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

canvas.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 3; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      alpha: 1,
      size: Math.random() * 5 + 2,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 0.01;
    if (p.alpha <= 0) particles.splice(i, 1);

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

const ambientAudio = document.createElement('audio');
ambientAudio.id = 'ambient-audio';
ambientAudio.src = 'assets/waves.mp3';
ambientAudio.autoplay = true;
ambientAudio.loop = true;
document.body.appendChild(ambientAudio);

const oceanSound = document.createElement('audio');
oceanSound.id = 'oceanSound';
oceanSound.src = 'assets/ocean.mp3';
oceanSound.loop = true;
document.body.appendChild(oceanSound);

const surfboardSVG = `
<svg id="surfboard" viewBox="0 0 100 200" role="button" aria-label="Get a surfboard fortune" tabindex="0">
  <ellipse cx="50" cy="50" rx="10" ry="30" fill="#0ff" />
</svg>`;
document.body.insertAdjacentHTML('beforeend', surfboardSVG);

animate();