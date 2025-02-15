document.addEventListener("DOMContentLoaded", () => {
    // Scroll effect when clicking "Discover More"
   document.getElementById("explore-btn").addEventListener("click", () => {
       document.querySelector(".featured").scrollIntoView({ behavior: "smooth" });
   });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
   document.getElementById("nav-links").classList.toggle("show");
});
