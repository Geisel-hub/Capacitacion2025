let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let ScrollBtn = document.querySelector(".scroll-btn");


menuBtn.onclick = function () {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
}

cancelBtn.onclick = function () {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
}

/*Menu de navegacion del Sticky*/
let nav = document.querySelector("nav")
let val
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky")
        ScrollBtn.classList.add("scroll-btn-active")
    } else {
        nav.classList.remove("sticky")
        ScrollBtn.classList.remove("scroll-btn-active")
    }
}

//Cambiar las Abreviaturas del Footer
window.addEventListener("resize", () => {
    const resize = window.innerWidth
    const links = document.querySelectorAll('.footer-link')

    if (resize <= 1000) {
        links[0].textContent = "Conf. Gral."
        links[1].textContent = "Div. Interam."
        links[2].textContent = "UD"
        links[3].textContent = "ACD"
        links[4].textContent = "ADS"
        links[5].textContent = "ADN"
        links[6].textContent = "ADOSE"
        links[7].textContent = "ADONE"
    } else {
        links[0].textContent = "Conferencia General"
        links[1].textContent = "División. Interamericana"
        links[2].textContent = "Unión Dominicana (UD)"
        links[3].textContent = "Asoc. Central Dom. (ACD)"
        links[4].textContent = "Asoc. Dom. del Sur (ADS)"
        links[5].textContent = "Asoc. Dom. del Norte (ADN)"
        links[6].textContent = "Asoc. Dom. del Sureste (ADOSE)"
        links[7].textContent = "Asoc. Dom. del Nordeste (ADONE)"
    }
})
