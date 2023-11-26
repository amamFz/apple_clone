// Inisialisasi Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

// Pengaturan menu responsif
var menuIcon = document.querySelector(".ri-menu-3-line");
var closeIcon = document.querySelector(".ri-close-fill");
var responsiveNav = document.querySelector(".respo-nav");

menuIcon.addEventListener("click", function () {
    responsiveNav.style.top = "0%";
});

closeIcon.addEventListener("click", function () {
    responsiveNav.style.top = "-120%";
});

// Pengaturan submenu
var storeLink = document.querySelector("#store");
var subMenu = document.querySelector(".submenu");

storeLink.addEventListener("mouseenter", function () {
    subMenu.style.top = "5%";
});

storeLink.addEventListener("mouseleave", function () {
    subMenu.style.top = "-100%";
});
