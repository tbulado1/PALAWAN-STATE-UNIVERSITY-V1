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

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('main-nav');
    const menuToggle = document.querySelector('.menu-toggle');

    // --- Opacity Change on Scroll Function ---
    function handleScrollOpacity() {
        const scrollPosition = window.scrollY;
        const maxScroll = 400; 
        const minOpacity = 0.5;

        let opacityReduction = Math.min(scrollPosition / maxScroll, 1) * (1 - minOpacity);
        let finalOpacity = 1 - opacityReduction;
        
        navbar.style.opacity = finalOpacity;
    }

    window.addEventListener('scroll', handleScrollOpacity);
    handleScrollOpacity(); 

    // --- Smooth Scrolling and Mobile Menu Toggle ---
    
    // Toggle the mobile menu open/close
    menuToggle.addEventListener('click', function() {
        // FIX: The CSS is keyed to the 'open' class
        navLinks.classList.toggle('open');
    });

    // Handle smooth scrolling for all navigation links
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = navbar.offsetHeight; 
                const targetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition, 
                    behavior: 'smooth' 
                });
            }
            
            // Close the mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('open');
            }
        });
    });
});
