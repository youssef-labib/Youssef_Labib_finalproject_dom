//~ Navbar Menu
let openNav = document.querySelector(".n-open")
let navbar = document.querySelector(".n-middle")
let myBody = document.querySelector("body")
let closeNav = document.querySelector(".n-close")

openNav.addEventListener("click", function () {
    navbar.style.left = "5vw"
    myBody.classList.add("overflow")
    closeNav.classList.add("closeNav")
})

closeNav.addEventListener("click", function () {
    navbar.style.left = "-200%"
    myBody.classList.remove("overflow")
    closeNav.classList.remove("closeNav")
})

function setActive(elements, activeClass, current) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(activeClass)
    }
    current.classList.add(activeClass)
}

//^---------------------------------------------------------------------

//~ Navbar Active Link
let navbarLinks = document.querySelectorAll("#navbar .n-items")
for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.remove("active")
}
if (navbarLinks.length > 0) {
    navbarLinks[0].classList.add("active")
}
for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        setActive(navbarLinks, "active", this)
    })
}

//^---------------------------------------------------------------------

//~ Carousel 
let nextBtns = document.querySelectorAll(".next-btn")
let previousBtns = document.querySelectorAll(".previous-btn")
let containers = document.querySelectorAll(".carousel-container")

let carouselIndexes = {}

for (let i = 0; i < nextBtns.length; i++) {
    nextBtns[i].addEventListener("click", function (e) {
        let target = this.getAttribute("carousel-target")
        let targetID = 0
        if (carouselIndexes[target] !== undefined) {
            targetID = carouselIndexes[target]
        }
        slider(targetID + 1, target)
    })
}

for (let i = 0; i < previousBtns.length; i++) {
    previousBtns[i].addEventListener("click", function (e) {
        let target = this.getAttribute("carousel-target")
        let targetID = 0
        if (carouselIndexes[target] !== undefined) {
            targetID = carouselIndexes[target]
        }
        slider(targetID - 1, target)
    })
}

function slider(index, target) {
    for (let i = 0; i < containers.length; i++) {
        let container = containers[i]
        if (container.id == target) {
            let camera = container.querySelector(".carousel")
            let slides = container.querySelectorAll(".slide")
            if (slides.length === 0) {
                return
            }
            let slideWidth = slides[0].offsetWidth
            if (!slideWidth) {
                slideWidth = slides[0].clientWidth
            }
            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                index = 0
            }
            camera.style.transform = "translateX(-" + (slideWidth * index) + "px)"
            carouselIndexes[target] = index
        }
    }
}

let showCarouselBtn = document.getElementById("show-carousel")
showCarouselBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let carousel1 = document.getElementById("carousel1")
    carousel1.style.display = "block"
    showCarouselBtn.style.display = "none"
})

let closeCarouselBtn = document.getElementById("close-carousel2")
closeCarouselBtn.addEventListener("click", function () {
    let carousel1 = document.getElementById("carousel1")
    carousel1.style.display = "none"
    let showCarouselBtn = document.getElementById("show-carousel")
    showCarouselBtn.style.display = "inline"
})

//^---------------------------------------------------------------------

//~ Modal
let buttons = document.querySelectorAll(".booktable")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let modalID = this.getAttribute("my-attribute")
        let modal = document.getElementById(modalID)
        let backdrop = modal.parentElement

        backdrop.style.display = "flex"
        modal.style.display = "block"
        document.body.style.overflow = "hidden"

        function closeModal() {
            modal.style.display = "none"
            backdrop.style.display = "none"
            document.body.style.overflow = "auto"
        }

        backdrop.addEventListener("click", function (e) {
            if (e.target === backdrop) {
                closeModal()
            }
        })

        let closeBtns = modal.querySelectorAll(".btn-close")
        for (let j = 0; j < closeBtns.length; j++) {
            closeBtns[j].addEventListener("click", closeModal)
        }
    })
}

//^---------------------------------------------------------------------

//~ Menu Filter
let filterButtons = document.querySelectorAll(".m-filter a")
let filterableItems = document.querySelectorAll(".m-items .m-item")

function filterItems(e) {
    setActive(filterButtons, "m-filter-a-active", this)

    for (let i = 0; i < filterableItems.length; i++) {
        let item = filterableItems[i]
        item.classList.add("m-hide")
        if (item.dataset.name === this.dataset.name || this.dataset.name === "all") {
            item.classList.remove("m-hide")
        }
    }
}

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", filterItems)
}

//^---------------------------------------------------------------------

//~ Specials Filter 
let specialsFilterBtns = document.querySelectorAll(".s-left-filter .filter-btn")
let specialsDishes = document.querySelectorAll(".s-right-dishes .s-right-dish")

for (let i = 0; i < specialsFilterBtns.length; i++) {
    specialsFilterBtns[i].addEventListener("click", function () {
        for (let j = 0; j < specialsFilterBtns.length; j++) {
            specialsFilterBtns[j].classList.remove("s-btn-active")
        }
        this.classList.add("s-btn-active")

        let name = this.getAttribute("data-name")
        for (let k = 0; k < specialsDishes.length; k++) {
            let dish = specialsDishes[k]
            if (dish.getAttribute("data-name") === name) {
                dish.style.display = "flex"
            } else {
                dish.style.display = "none"
            }
        }
    })
}

for (let i = 0; i < specialsDishes.length; i++) {
    if (i === 0) {
        specialsDishes[i].style.display = "flex"
    } else {
        specialsDishes[i].style.display = "none"
    }
}

//^---------------------------------------------------------------------

//~ 
