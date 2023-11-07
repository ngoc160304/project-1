const menuBars = document.querySelector(".inner-bars");
const listMenuBars = document.querySelector('.inner-menu-bar');
console.log(menuBars);
console.log(listMenuBars);

var onresize = function(e) {
    width = document.body.clientWidth;
    if(width >= 978) {
        listMenuBars.classList.remove("dp-block")
    }
 }
window.addEventListener("resize", onresize);
menuBars.addEventListener("click", () => {
    listMenuBars.classList.toggle("dp-block")
});