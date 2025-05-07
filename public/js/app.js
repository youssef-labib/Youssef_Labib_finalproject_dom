let navSec = document.querySelectorAll('.n-items');

function removeActive() {
    for (let i = 0; i < navSec.length; i++) {
        navSec[i].classList.remove('active');
    }
}

function setActiveLinkBySection(sectionId) {
    removeActive();
    for (let i = 0; i < navSec.length; i++) {
        if (navSec[i].getAttribute('href') === '#' + sectionId) {
            navSec[i].classList.add('active');
        }
    }
}

setActiveLinkBySection('home');

//~ appearing nav menu
let openNav = document.querySelector('.n-open')
let navbar = document.querySelector('.n-middle')
let myBody = document.querySelector('body')
let closeNav = document.querySelector('.n-close')
openNav.addEventListener('click' , () => {
navbar.style.left = '5vw' ;
myBody.classList.add('overflow')
closeNav.classList.add('closeNav')
})
closeNav.addEventListener('click' , ()=>{
navbar.style.left = '-200%' ;
myBody.classList.remove('overflow')
closeNav.classList.remove('closeNav')
})
