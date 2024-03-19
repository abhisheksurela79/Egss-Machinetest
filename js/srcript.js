const scrollToTop = document.querySelector("#scroll-to-top");


scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})