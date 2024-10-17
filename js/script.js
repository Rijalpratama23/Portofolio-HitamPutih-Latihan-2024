// humberger menu 
const hamburgerMenu = document.getElementById("hamburger-menu");
const menuList = document.getElementById("menu-list");

// ini perumpamaan, ketika kita menklik tombol hamburger menu kita mau akan terjadi apa.
hamburgerMenu.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});