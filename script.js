// Select all sections with the 'hidden' class
const hiddenSections = document.querySelectorAll('.hidden');

// Function to handle animations on scroll
function handleScrollAnimations() {
    hiddenSections.forEach(section => {
        const position = section.getBoundingClientRect();
        const isVisible = position.top < window.innerHeight - 100; // Add buffer for smooth transitions
        if (isVisible) {
            section.classList.add('show'); // Trigger animation
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', handleScrollAnimations);

// Initial check for elements that are already in view
handleScrollAnimations();