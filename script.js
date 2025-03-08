document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in Effect on Scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));

    // Product Modal Popup
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal img');

document.querySelectorAll('.product img').forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
});

    // Image Modal Popup
document.querySelectorAll(".product img").forEach(img => {
    img.addEventListener("click", () => {
        document.querySelector(".modal").classList.add("active");
        document.querySelector(".modal img").src = img.src;
    });
});

    document.querySelector(".modal").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elements.forEach(element => observer.observe(element));
});

document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});