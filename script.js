const content = document.getElementById('content');
const links = document.querySelectorAll('.nav-links a');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Dynamic section content
const sections = {
  home: '',
  about: `
    <div class="section-box">
      <h2>About NexaDev Learning</h2>
      <p>NexaDev Learning is a cutting-edge ICT institute training students and professionals in Web Development, AI, and Digital Skills. We help university students land real tech jobs with mentorship, portfolio projects, and practical training.</p>
    </div>
  `,
  courses: `
    <div class="section-box">
      <h2>Web Development</h2>
      <p>Learn HTML, CSS, JavaScript, Git/GitHub & real-world projects to become job-ready.</p>
    </div>
    <div class="section-box">
      <h2>AI & Automation</h2>
      <p>Master AI tools, automation workflows, and practical AI projects to boost your career.</p>
    </div>
    <div class="section-box">
      <h2>Tech Career Coaching</h2>
      <p>Portfolio building, interview prep, freelancing, and placement support for students.</p>
    </div>
  `,
  contact: `
    <div class="section-box">
      <h2>Contact Us</h2>
      <p>Email: info@nexadevlearning.com</p>
      <p>Phone: +234 800 123 4567</p>
      <p>Address: 123 Tech Street, Lagos, Nigeria</p>
    </div>
  `
};

// Load section dynamically
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Remove active
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const section = link.getAttribute('data-section');
    content.innerHTML = sections[section];
    content.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu if open
    if(navLinks.classList.contains('show')){
      navLinks.classList.remove('show');
    }
  });
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Hero button scrolls to Courses dynamically
document.querySelector('.hero-btn').addEventListener('click', () => {
  document.querySelector('[data-section="courses"]').click();
});
