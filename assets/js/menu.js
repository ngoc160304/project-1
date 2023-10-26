const menuBars = document.querySelector(".inner-bars");
const listMenuBars = document.querySelector('.inner-menu-bar');
console.log(menuBars);
console.log(listMenuBars)
menuBars.addEventListener("click", () => {
    listMenuBars.classList.toggle("dp-block")
})