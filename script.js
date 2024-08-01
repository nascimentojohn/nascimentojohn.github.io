function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active-section'));

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active-section');
}

// Show the "Home" section by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Ensure 'home' is the default active section
});
