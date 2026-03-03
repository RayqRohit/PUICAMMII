// Go to Top Button Functionality
const goToTopBtn = document.getElementById('goToTopBtn');

// Show button when user scrolls down 300px
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        goToTopBtn.classList.add('show');
    } else {
        goToTopBtn.classList.remove('show');
    }
});

// Scroll to top when button is clicked
goToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
