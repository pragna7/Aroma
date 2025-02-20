document.addEventListener("DOMContentLoaded", () => {
    // Scroll effect when clicking "Discover More"
   document.getElementById("explore-btn").addEventListener("click", () => {
       document.querySelector(".featured").scrollIntoView({ behavior: "smooth" });
   });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
   document.getElementById("nav-links").classList.toggle("show");
});

const navLinks = document.querySelectorAll(".nav-links a");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");

// Smooth scrolling
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute("href"));
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

    // Dark mode toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.querySelector("nav").classList.toggle("dark-mode");
        document.querySelector(".hero").classList.toggle("dark-mode");
        document.querySelector("footer").classList.toggle("dark-mode");

        // Toggle the dark mode icon (sun/moon)
        if (document.body.classList.contains("dark-mode")) {
            darkModeIcon.src = "moon-icon.png"; // Replace with moon icon for dark mode
        } else {
            darkModeIcon.src = "sun-icon.png"; // Replace with sun icon for light mode
        }
    });
});

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("nav").classList.toggle("dark-mode");
    document.querySelector(".hero").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");

    // Toggle the dark mode icon (sun/moon)
    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.src = "moon-icon.png"; // Replace with moon icon for dark mode
    } else {
        darkModeIcon.src = "sun-icon.png"; // Replace with sun icon for light mode
    }
});