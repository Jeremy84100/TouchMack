const btn = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

btn.addEventListener('click',() => {
    navLinks.classList.toggle('mobile-menu')
})
