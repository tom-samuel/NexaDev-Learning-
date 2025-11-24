// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Hero button alert
document.querySelector('.hero-btn').addEventListener('click', () => {
  alert("Welcome to NexaDev Learning! Your tech journey starts now.");
});￼Enter
