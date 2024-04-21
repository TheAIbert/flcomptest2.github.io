/* ================ HAMBURGER MENU ================ */ 
const headerNav = document.querySelector(".nav");
const mobileMenu = document.querySelector(".mobile__menu")
const menuIcon = document.getElementById("menuIcon")

function hideMenu() {
    mobileMenu.classList.remove("active")
    menuIcon.classList.remove("ri-close-line"); 
    menuIcon.classList.add("ri-menu-line");
}

// hide menu when clicking on another area of ​​the screen
document.addEventListener("click", function(event) {
    if (!headerNav.contains(event.target)) {
        hideMenu();
    }
});

function toggleMenu() {
    if (!mobileMenu.classList.contains("active")) {
        mobileMenu.classList.add("active")
        menuIcon.classList.remove("ri-menu-line");        
        menuIcon.classList.add("ri-close-line");        
    } else {
        hideMenu();
    }
}


// Второй способ через id="menuList" вметсто class="mobile__menu"
// let menuList = document.getElementById("menuList")
// let menuIcon = document.getElementById("menuIcon")
// menuList.style.maxHeight = "0px";

// function toggleMenu() {
//     if (menuList.style.maxHeight == "0px") {
//         menuList.style.maxHeight = "300px";
//         menuIcon.classList.remove("ri-menu-line");        
//         menuIcon.classList.add("ri-close-line");        
//     } else {
//         menuList.style.maxHeight = "0px";
//         menuIcon.classList.remove("ri-close-line"); 
//         menuIcon.classList.add("ri-menu-line");
//     }
// }


