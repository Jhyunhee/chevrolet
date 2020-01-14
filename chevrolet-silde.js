$("document").ready(function(){
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
}) 