const mobileNav = document.querySelector('.top-nav ul');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    burgerIcon.classList.toggle("active");
})