$("document").ready(function(){
  $(window).scroll(function(){
    var current = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
    $(".indicator").width(current + "%")
  })  

    var a = 0,
        leng = $(".visual ul li").length - 1,
        time = false;
        auto_play = setInterval(function(){a++; if(a > leng) a = 0; $(".visual ul").stop().animate({left: "-100" * a + "%"}, 2000)}, 4000)        
    $(".visual ul").hover(function(){
        clearInterval(auto_play)
    }, function(){
        clearInterval(auto_play);
        auto_play = setInterval(function(){a++; if(a > leng) a = 0; $(".visual ul").stop().animate({left: "-100" * a + "%"}, 2000)}, 4000)
    })
    
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
    })
})