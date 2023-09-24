
const hamburgerBtn = document.querySelector('.hamburger_btn');
const closeNavBtn = document.querySelector('.close_nav_btn');
const navEl = document.querySelector('nav');


const showNav = () => {
    navEl.classList.add('show');
}

const closeNav = () => {
    navEl.classList.remove('show');
}

hamburgerBtn.addEventListener('click', showNav);
closeNavBtn.addEventListener('click', closeNav);
