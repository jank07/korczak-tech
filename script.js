window.addEventListener ('load', () => {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector(".hamburger");

    menu_btn.addEventListener("click", () => {
        menu_btn.classList.toggle('is-active');
    })
})
