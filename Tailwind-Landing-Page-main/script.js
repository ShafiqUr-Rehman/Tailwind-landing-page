let mobileMenu = document.querySelector("#mobile-menu");
let menuIcon = document.querySelector("#menu-icon i");

mobileMenu.style.maxHeight = "0px";

menuIcon.addEventListener("click", function () {
    if (mobileMenu.style.maxHeight === "0px") {
        mobileMenu.style.maxHeight = "400px";
        menuIcon.classList.add("fa-xmark")
    }
    else {
        mobileMenu.style.maxHeight = "0px";
        menuIcon.classList.remove("fa-xmark")
    }
})