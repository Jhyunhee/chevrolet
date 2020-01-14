$("document").ready(function(){
    var swiper = new Swiper(".swiper-container",{
        autoplay: {
            delay: 2500
        },
        slidesPerView: 3,
        spaceBetween: 30,
        loop : true,
        navigation :{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
        //loop 자동슬라이드
    })
    
})