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
    document.body.scrollIntoView({ behavior: 'smooth' });
}

// Event listener untuk tombol
document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);
