'use strict'

const search = document.querySelector(".search");
const searchInput = document.querySelector(".search-input");
const bookBtn = document.querySelector(".book-now-btn");
const selectPackageModal = document.querySelector(".select-package");
const checkoutModal = document.querySelector(".checkout");
const selectPackageCloseBtn = document.querySelector(".select-package-close-btn");
const checkoutCloseBtn = document.querySelector(".checkout-close-btn");
const nextBtn = document.querySelector(".next-btn");
const quickWashPackage = document.querySelector(".quick-wash");
const daySpaPackage = document.querySelector(".day-spa");
const deluxWashPackage = document.querySelector(".delux-wash");
const scrollDownBtn = document.querySelector(".scroll-down");
const responsiveScrollBtn = document.querySelector(".responsive-scroll");
const slides = document.querySelectorAll(".swiper-slide");
const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-menu");

//
let selectedPackage = null;
let tax = 12;

//
search.addEventListener("click", function() {
    searchInput.style.width = "222px";
    searchInput.style.borderRadius = "100px";
    searchInput.removeAttribute('readonly');
    searchInput.style.paddingLeft = "40px";
});

bookBtn.addEventListener("click", function() {
    selectPackageModal.style.display = "block";
    document.querySelector("main").style.position = 'fixed';
    header.style.position = "absolute";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

selectPackageCloseBtn.addEventListener("click", function() {
    selectPackageModal.style.display = "none";
    document.querySelector("main").style.position = 'relative';
    header.style.position = "relative";
    selectedPackage = null;
    quickWashPackage.style.border = "none";
    deluxWashPackage.style.border = "none";
    daySpaPackage.style.border = "none";
})

checkoutCloseBtn.addEventListener("click", function() {
    checkoutModal.style.display = "none";
    document.querySelector("main").style.position = 'relative';
    header.style.position = "relative";
    selectedPackage = null;
    quickWashPackage.style.border = "none";
    deluxWashPackage.style.border = "none";
    daySpaPackage.style.border = "none";
})

quickWashPackage.addEventListener("click", function() {
    quickWashPackage.style.border = "2px solid #175676";
    daySpaPackage.style.border = "none";
    deluxWashPackage.style.border = "none";
    selectedPackage = document.querySelector(".quick-wash .package-title").innerHTML;
})

daySpaPackage.addEventListener("click", function() {
    daySpaPackage.style.border = "2px solid #175676";
    quickWashPackage.style.border = "none";
    deluxWashPackage.style.border = "none";
    selectedPackage = document.querySelector(".day-spa .package-title").innerHTML;
})

deluxWashPackage.addEventListener("click", function() {
    deluxWashPackage.style.border = "2px solid #175676";
    daySpaPackage.style.border = "none";
    quickWashPackage.style.border = "none";
    selectedPackage = document.querySelector(".delux-wash .package-title").innerHTML;
})

nextBtn.addEventListener("click", function() {
    if (selectedPackage) {
        checkoutModal.style.display = "block";
        selectPackageModal.style.display = "none";
        document.querySelectorAll(".selected-package").forEach(el => el.innerHTML = selectedPackage);
        if (selectedPackage === "Quick Wash") {
            document.querySelectorAll(".price").forEach(el => el.innerHTML = "$40.00");
            document.querySelector(".total").innerHTML = `$${tax + 40}.00`;
        } else if (selectedPackage === "Day Spa") {
            document.querySelectorAll(".price").forEach(el => el.innerHTML = "$100.00");
            document.querySelector(".total").innerHTML = `$${tax + 100}.00`;
        } else if (selectedPackage === "Delux Wash") {
            document.querySelectorAll(".price").forEach(el => el.innerHTML = "$230.00");
            document.querySelector(".total").innerHTML = `$${tax + 230}.00`;
        }
        document.querySelector(".tax").innerHTML = `$${tax}.00`;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})

scrollDownBtn.addEventListener("click", function() {
    smoothScroll(document.querySelector(".services"));
})

responsiveScrollBtn.addEventListener("click", function() {
    smoothScroll(document.querySelector(".services"));
})

hamburgerMenu.addEventListener("click", function() {
    document.querySelector(".responsive-nav").style.display = "flex";
})

window.smoothScroll = function(target) {
    let scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function() { scroll(c, a, b, i); }, 20);
    }
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

window.onclick = function(event) {
        if (!event.target.closest(".search")) {
            searchInput.style.width = "44px";
            searchInput.style.borderRadius = "50%";
            searchInput.setAttribute('readonly', true);
            searchInput.style.paddingLeft = "0";
            searchInput.value = "";
        }
        if (event.target.closest("main")) {
            document.querySelector(".responsive-nav").style.display = "none";
        }

    }
    //
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1.4,
            spaceBetween: 0,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next, .swipe",
        prevEl: ".swiper-button-prev",
    },

});