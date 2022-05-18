// Show scroll up 
function scrollUp () {
    const scrollUp = document.getElementById ('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the
    if (this.scrollY >= 560) scrollUp.classList.add ('show-scroll'); else scrollUp.classList.remove ('show-scroll') 
}
window.addEventListener ('scroll', scrollUp)