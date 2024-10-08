// Menampilkan tombol saat scroll ke bawah
window.onscroll = function() {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Fungsi untuk scroll ke atas
function scrollToTop() {
    const scrollStep = -window.scrollY / (2000 / 50); // Menghitung langkah scroll
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

// Event listener untuk tombol
document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);
