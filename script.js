

let dabba = document.querySelector(".dabba-container")
let fixeds= document.querySelector(".fixed-image")

dabba.addEventListener("mouseenter",function(){
    fixeds.style.display = "block"
})

dabba.addEventListener("mouseleave",function(){
    fixeds.style.display = "none"
})

let elems = document.querySelectorAll(".dabba")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
       var image = e.getAttribute("data-image") 
       fixeds.style.backgroundImage = `url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 60,
   
    breakpoints:{
        600:{
            slidesPerView: 3.5,
            spaceBetween: 30,
        },

    },
    freeMode: true,
  });


var screen = document.querySelector(".fullscr")
var button = document.querySelector(".nav h3")
var photo = document.querySelector(".nav img")
var flag = 0

button.addEventListener("click", function(){
    if (flag == 0) {
        screen.style.top = "0%"
        photo.style.opacity = 0
        flag = 1
    }else{
        screen.style.top = "-120%"
        photo.style.opacity = 1
        flag = 0
    }
  
})

gsap.to(".loader h2",{
    display: "block",
    ease: "none",
    stagger: .6,
    duration: .3,
})
gsap.to(".loader h2",{
    display: "none",
    ease: "none",
    delay:.3,
    stagger: .6,
    duration: .3,
})

gsap.to(".loader",{
    top:"-100%",
    duration:.7,
    delay: 2,
})
