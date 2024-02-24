

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
    slidesPerView: 3.5,
    spaceBetween: 30,
    freeMode: true,
  });
