const features = document.querySelectorAll('.feature');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 150);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

features.forEach(feature => observer.observe(feature));

// Add ambient audio that fades in on load and loops
const audio = document.createElement('audio');
audio.id = 'ambient-audio';
audio.src = 'assets/waves.mp3';
audio.autoplay = true;
audio.loop = true;
document.body.appendChild(audio);

// Add SVG wakesurf board animation that gently bobs as user scrolls
const svg = `
<svg id="surfboard" viewBox="0 0 100 200" role="button" aria-label="Get a surfboard fortune" tabindex="0">
  <ellipse cx="50" cy="100" rx="20" ry="80" fill="#0ff" />
</svg>`;
document.body.insertAdjacentHTML('beforeend', svg);

// Add ocean sound audio element
const oceanSound = document.createElement('audio');
oceanSound.id = 'oceanSound';
oceanSound.src = 'assets/ocean.mp3';
oceanSound.loop = true;
document.body.appendChild(oceanSound);
