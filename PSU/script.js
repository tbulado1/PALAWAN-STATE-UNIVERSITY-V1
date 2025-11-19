const links = document.querySelectorAll('.nav-links a');

// Add smooth scroll + highlight active link
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove active state from all
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Scroll smoothly to the section
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
