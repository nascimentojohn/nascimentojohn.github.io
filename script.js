// Function to show a specific section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const activeSection = document.getElementById(sectionId);

    if (!activeSection) {
        console.error(`Section with id "${sectionId}" not found`);
        return;
    }

    sections.forEach(section => {
        section.classList.remove('active-section');
        section.style.display = 'none';
    });

    activeSection.classList.add('active-section');
    activeSection.style.display = 'block';

    // Smooth scroll to the section
    activeSection.scrollIntoView({ behavior: 'smooth' });

    // Update URL hash without scrolling
    history.pushState(null, null, `#${sectionId}`);
}

// Function to set the active section based on URL hash
function setActiveSectionFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
    } else {
        showSection('home');
    }
}

// Event listener for hash changes
window.addEventListener('hashchange', setActiveSectionFromHash);

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setActiveSectionFromHash();

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (!link.classList.contains('lang-switch')) {
                event.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                showSection(sectionId);
            }
        });
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        rootMargin: '0px 0px 50px 0px
