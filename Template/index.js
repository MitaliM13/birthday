
const scroll= new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth:true
});
// const a=  document.querySelector("#elem1");
// console.log(a);

// console.log("yadav");

const elemC = document.querySelector(".elem-container");
 const fixed =document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter",function(){
    fixed.style.display= "block";
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display= "none";
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image= e.getAttribute("data-image")
        fixed.style.backgroundImage= `url(${image})`
    })
})

// var swiper = new Swiper(".mySwiper", {
//     effect: "cards",
//     grabCursor: true,
//   });