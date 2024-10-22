document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.querySelector('.home');
    const githubIcon = document.getElementById('github');
    const linkedinIcon = document.getElementById('linkedin');
    const mailIcon = document.getElementById('mail');

    const defaultGradient = 'linear-gradient(-90deg, var(--bg-color) 65%, #fff 35%)';

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const dotIndicators = document.querySelectorAll('.dot');

    let currentSectionIndex = 0;

    // Function to scroll to a specific section
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            updateDots(index);
            currentSectionIndex = index;
        }
    }

    // Function to update the active dot
    function updateDots(index) {
        dotIndicators.forEach(dot => dot.classList.remove('active'));
        dotIndicators[index].classList.add('active');
    }

    // Add click event listeners to the dots
    dotIndicators.forEach((dot, index) => {
        dot.addEventListener('click', () => scrollToSection(index));
    });

    // Scroll event to update active dot and navigation link based on section visibility
    window.addEventListener('scroll', () => {
        let currentSection = 0;
        sections.forEach((sec, index) => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 100;
            const height = sec.offsetHeight;
            if (top >= offset && top < offset + height) {
                currentSection = index;
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`header nav a[href*=${sec.id}]`).classList.add('active');
            }
        });
        updateDots(currentSection);
        currentSectionIndex = currentSection;
    });

    // Keyboard navigation for arrow keys and Page Up/Down
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown' || event.key === 'PageDown') {
            scrollToSection(currentSectionIndex + 1);
            event.preventDefault();
        } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
            scrollToSection(currentSectionIndex - 1);
            event.preventDefault();
        }
    });

    // Mousewheel navigation
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            scrollToSection(currentSectionIndex + 1);
        } else {
            scrollToSection(currentSectionIndex - 1);
        }
        event.preventDefault();
    });

    // Hover effects
    function addHoverEvents() {
        githubIcon.addEventListener('mouseenter', githubHover);
        githubIcon.addEventListener('mouseleave', resetBackground);

        linkedinIcon.addEventListener('mouseenter', linkedinHover);
        linkedinIcon.addEventListener('mouseleave', resetBackground);

        mailIcon.addEventListener('mouseenter', mailHover);
        mailIcon.addEventListener('mouseleave', resetBackground);
    }

    function githubHover() {
        homeSection.style.background = 'linear-gradient(-90deg, var(--github-color) 65%, #fff 35%)';
    }

    function linkedinHover() {
        homeSection.style.background = 'linear-gradient(-90deg, var(--linkedin-color) 65%, #fff 35%)';
    }

    function mailHover() {
        homeSection.style.background = 'linear-gradient(-90deg, var(--mail-color) 65%, #fff 35%)';
    }

    function resetBackground() {
        homeSection.style.background = defaultGradient;
    }

    // Update background based on resolution
    function updateBackground() {
        if (isMobile()) {
            homeSection.style.background = 'var(--bg-color)';
            
        } else {
            homeSection.style.background = defaultGradient;
            
        }
    }

    // Check if the website is being viewed in mobile resolution
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Initial update to set the correct background and events
    updateBackground();

    // Responsive background update
    window.addEventListener('resize', updateBackground);
    window.addEventListener('orientationchange', updateBackground);

    // Tabs functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    addHoverEvents();

});