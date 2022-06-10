// const hamburgerMenu = document.querySelector(".nav-links");
// const hamburgerLabel = document.querySelector(".hamburger-label");

// function hamburgerToggle() {
//     if (hamburgerMenu.classList.contains("nav-link")) {
//         hamburgerMenu.classList.add("nav-links-visible");
//     } else if (hamburgerMenu.classList.contains("nav-links-visible")) {
//         hamburgerMenu.classList.remove("nav-links-visible");
//     } 
// }

// hamburgerLabel.addEventListener("click", hamburgerToggle);

const hamburger = document.querySelector(".hamburger-label");
const navbar = document.querySelector(".nav-links");

hamburger.addEventListener("click", ()=> {
    navbar.classList.toggle("open");
});


//const hamburgerBtn = document.querySelector('.hamburger-label');
let hamburgerOpen = false;

hamburgerBtn.addEventListener('click', () => {
    if (!hamburgerOpen) {
        hamburgerBtn.classList.add('open');
        hamburgerOpen = true;
    } else {
        hamburgerBtn.classList.remove('open');
        hamburgerOpen = false;
    }
});