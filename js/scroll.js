// Show the Back to Top button when scrolling down
window.addEventListener('scroll', () => {
    const button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

// Smooth scroll to the top when the button is clicked
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
