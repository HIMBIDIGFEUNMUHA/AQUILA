
/**list logo */
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");


menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");   
});

/*open image*/
function openImage(imageUrl) {
    if (confirm("Do you want to open this image?")) {
        window.open(imageUrl, '_blank');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.toggleButton');
    const allImages = document.querySelectorAll('.media-grid img, .media-grid-1 img');
    let visibleImages = 0; 
    const increment = 9;

    for (let i = 0; i < Math.min(increment, allImages.length); i++) {
        allImages[i].style.display = 'block';
        visibleImages++;
    }

    toggleButton.addEventListener("click", function() {
        const nextImages = visibleImages + increment;

        for (let i = visibleImages; i < Math.min(nextImages, allImages.length); i++) {
            allImages[i].style.display = 'block';
        }

        visibleImages += increment;

        if (visibleImages >= allImages.length) {
            toggleButton.style.display = 'none';
        }
    });
});




/* slide */
let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    
    // Function to slide to the next item
    function slideNext() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    }
    
    // Function to slide to the previous item
    function slidePrev() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    }
    
    // Event listeners for manual sliding
    next.addEventListener('click', slideNext);
    prev.addEventListener('click', slidePrev);
    
    // Auto slide every 3 seconds
    setInterval(slideNext, 5000);

    /** */
    document.querySelectorAll('.toggle-btn').forEach(button => {
            button.addEventListener('click', () => {
                const moreText = button.previousElementSibling.querySelector('.more-text');
                const isExpanded = moreText.style.display === "inline";

                if (isExpanded) {
                    moreText.style.display = "none";
                    button.textContent = "Baca Lebih Lanjut";
                } else {
                    moreText.style.display = "inline";
                    button.textContent = "Baca Lebih Sedikit";
                }
            });

            // Automatically minimize text on page load
            const moreText = button.previousElementSibling.querySelector('.more-text');
            moreText.style.display = "none"; // Ensure more text is hidden initially
        });




     





/**back */