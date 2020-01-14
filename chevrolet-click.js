$("document").ready(function(){
    var a = 0,
        leng = $(".news ul li").length - 1,
        time = false;
        auto_play = setInterval(function(){a++; if(a > leng) a = 0; $(".news ul").stop().animate({left: "-100" * a + "%"}, 1000)}, 3000)
        $(".new a").click(function(e){
            e.preventDefault();
            var i = $(".new a").index(this);
            if(time == true){return;}
            setTimeout(function(){time = false;}, 1000)
            time = true;
            if(i == 0){a--; if(a < 0) a = leng;}else{a++; if(a > leng) a = 0;}
            console.log(a)
            $(".news ul").stop().animate({left: "-100" * a + "%"}, 1000)
        }) 
}) 