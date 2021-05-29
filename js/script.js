let menuBurger = document.getElementById('menu-burger');

menuBurger.addEventListener('click', () => {
    let menu = document.getElementById('menu');
    menu.classList.remove('hidden');
    menu.classList.add('active');

    menuClose.classList.remove('d-none');
    menuBurger.classList.add('d-none');

    let headerFixed = document.querySelector('header');
    headerFixed.style.position = "absolute";
});


let menuClose = document.getElementById('menu-close');

menuClose.addEventListener('click', () => {
   closeBurgerMenu();
});

function closeBurgerMenu() {
    let menu = document.getElementById('menu');
    menu.classList.add('hidden');
    menu.classList.remove('active');

    menuClose.classList.add('d-none');
    menuBurger.classList.remove('d-none');

    let headerFixed = document.querySelector('header');
    headerFixed.style.position = "fixed";
}

let linkBurger = document.querySelectorAll('.nav-burger a');
for (let link of linkBurger)
link.addEventListener('click', () => { closeBurgerMenu()});



//
let header = document.querySelector("header");
// Анимация перехода по разделам при скроллинге (начало)
let sectionHome = document.getElementById("home");
let sectionServices = document.getElementById("our-services");
let sectionApps = document.getElementById("apps");
let sectionTestimonials = document.getElementById("testimonials");
let sectionAbout = document.getElementById("about-us");


let linkHome = document.querySelector("[href='#home']");
let linkServices = document.querySelector("[href='#our-services']");
let linkApps = document.querySelector("[href='#apps']");
let linkTestimonials = document.querySelector("[href='#testimonials']");
let linkAbout = document.querySelector("[href='#about-us']");




linkHome.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
});

linkServices.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, sectionServices.offsetTop - header.offsetHeight);
});

linkApps.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, sectionApps.offsetTop - header.offsetHeight);
});

linkTestimonials.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(
        0, sectionTestimonials.offsetTop - header.offsetHeight);
});

linkAbout.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(
        0, sectionAbout.offsetTop - header.offsetHeight);
});

// Анимация перехода по разделам при скроллинге (конец)





let linkModal = document.getElementById('link-modal');

linkModal.addEventListener('click', () => {
    let modalWindow = document.getElementById('modal-window');
    modalWindow.classList.remove('d-none');

    let headerFixed = document.querySelector('header');
    headerFixed.style.position = "absolute";
});


let modalClose = document.getElementById('modal-close');

modalClose.addEventListener('click', () => {
    let modalWindow = document.getElementById('modal-window');
    modalWindow.classList.add('d-none');

    let headerFixed = document.querySelector('header');
    headerFixed.style.position = "fixed";
});



let learnMore = document.getElementById('learn-more');

learnMore.addEventListener('click', () => {
    let openMore = document.querySelectorAll('.our-services-row article:nth-child(n + 6)');
    for (let article of openMore)
    article.classList.remove('d-none');

    learnMore.classList.add('d-none');
});


let learnApp = document.getElementById('learn-app');

learnApp.addEventListener('click', () => {
    let openMore = document.querySelectorAll('.learn-app p:nth-child(n + 1)');
    for (let paragraph of openMore)
    paragraph.classList.remove('d-none');

    let learnAppContainer = document.getElementById('learn-app-container');
    learnAppContainer.classList.add('align-items-lg-start');
    learnApp.classList.add('d-none');
})


let viewAll = document.getElementById('view-all');

viewAll.addEventListener('click', () => {
    let openMore = document.querySelectorAll('.about-us-row article:nth-child(n + 3)');
    for (let article of openMore)
        article.classList.remove('d-none');

    viewAll.classList.add('d-none');
});

