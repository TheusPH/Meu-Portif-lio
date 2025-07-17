document.addEventListener('DOMContentLoaded', function() {
    const originalNavbar = document.getElementById('original-navbar');
    const floatingNavbar = document.getElementById('floating-navbar');

    let scrollTriggerPoint = 0;

    function calculateScrollTriggerPoint() {
        if (originalNavbar) {
            scrollTriggerPoint = originalNavbar.offsetTop + originalNavbar.offsetHeight;
        } else {
            scrollTriggerPoint = 200;
            console.warn("Original Navbar não encontrada. Usando scrollTriggerPoint padrão de 200px.");
        }
    }

    const navLinks = floatingNavbar.querySelectorAll('a');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

    function highlightActiveLink() {
        let currentSection = sections[0];
        for (const section of sections) {
            if (!section) continue;
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= window.innerHeight / 2) {
                currentSection = section;
            }
        }
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = floatingNavbar.querySelector(`a[href="#${currentSection.id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    function handleScroll() {
        if (window.scrollY >= scrollTriggerPoint) {
            floatingNavbar.classList.add('show-floating-navbar');
            originalNavbar.style.opacity = '0';
            originalNavbar.style.visibility = 'hidden';
            originalNavbar.style.pointerEvents = 'none';
        } else {
            floatingNavbar.classList.remove('show-floating-navbar');
            originalNavbar.style.opacity = '1';
            originalNavbar.style.visibility = 'visible';
            originalNavbar.style.pointerEvents = 'auto';
        }
        highlightActiveLink();
    }

    calculateScrollTriggerPoint();
    handleScroll();

    window.addEventListener('resize', () => {
        calculateScrollTriggerPoint();
        handleScroll();
    });

    window.addEventListener('scroll', handleScroll);
});