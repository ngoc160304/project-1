const menuBars = document.querySelector(".inner-bars");
const listMenuBars = document.querySelector('.inner-menu-bar');

var onresize = function(e) {
    width = document.body.clientWidth;
    height = document.body.clientHeight;
    if(width >= 978) {
        listMenuBars.classList.remove("dp-block")
    }
}
window.addEventListener("resize", onresize);
menuBars.addEventListener("click", () => {
    listMenuBars.classList.toggle("dp-block")
});