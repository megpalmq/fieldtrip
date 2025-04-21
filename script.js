document.querySelectorAll('.hotspot').forEach(spot => {
    spot.addEventListener('click', () => {
      document.getElementById('modal-text').innerText = spot.dataset.info;
      document.getElementById('modal').style.display = 'block';
    });
  });
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  // Optional mini-game logic placeholder
  function playGame() {
    alert("Game coming soon! You'll match patterns to their meanings.");
}
const reveals = document.querySelectorAll('.reveal');

const options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, options);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});