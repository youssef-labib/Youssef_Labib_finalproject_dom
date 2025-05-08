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


//~ Carousel
let nextBtns = document.querySelectorAll(".next-btn")
let previousBtns = document.querySelectorAll(".previous-btn")
let containers = document.querySelectorAll(".carousel-container")

let carouselIndexes = new Map()

nextBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let target = e.target.getAttribute("carousel-target")
        let targetID = carouselIndexes.get(target) || 0
        slider(targetID + 1, target)
    });
});

previousBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let target = e.target.getAttribute("carousel-target")
        let targetID = carouselIndexes.get(target) || 0
        slider(targetID - 1, target)
    });
});


let slider = (index, target) => {
    containers.forEach(container => {
        if (container.id == target) {
            let camera = container.querySelector(".carousel")
            let slide = container.querySelectorAll(".slide")
            if (!slide.length) return
            let slideWidth = slide[0].offsetWidth || slide[0].clientWidth

            if (index < 0) {
                index = slide.length - 1
            } else if (index >= slide.length) {
                index = 0
            }

            camera.style.transform = `translateX(-${slideWidth * index}px)`
            carouselIndexes.set(target, index)
        }
    });
};


document.getElementById("show-carousel").addEventListener("click", function(e) {
    e.preventDefault()
    document.getElementById("carousel1").style.display = "block"
    this.style.display = "none"
});

document.getElementById("close-carousel").addEventListener("click", function() {
    document.getElementById("carousel1").style.display = "none"
    document.getElementById("show-carousel").style.display = "inline"
});


//~ modal
let buttons = document.querySelectorAll(".booktable");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let modalID = btn.getAttribute("my-attribute");
        let modal = document.getElementById(modalID);
        let backdrop = modal.parentElement;

        backdrop.style.display = "flex";
        modal.style.display = "block";
        document.body.style.overflow = "hidden";

        const closeModal = () => {
            modal.style.display = "none";
            backdrop.style.display = "none";
            document.body.style.overflow = "auto";
        };

        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) closeModal();
        });

        modal.querySelectorAll(".btn-close").forEach(close => {
            close.addEventListener("click", closeModal);
        });
    });
});
