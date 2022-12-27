$(function(){
    // 풀다운메뉴
    $(".full_menu, .nav li").on("mouseover", function(){
        $(".full_menu").stop().slideDown(500);
    });
    $(".full_menu, .nav li").on("mouseleave", function(){
        $(".full_menu").stop().slideUp(500);
    });

    // nav
    $(".full_cover > ul > li").on("mouseover", function(){
        var i = $(this).index();
        
        $("ul.nav li").eq(i).find(".line").css("width","100%");
    });
    $(".full_cover > ul > li").on("mouseleave", function(){
        var i = $(this).index();
        
        $(".nav li").eq(i).find(".line").css("width","0");
    });

    // 풀다운 메뉴에 오버 했을 때
    $(".nav li").on("mouseover", function(){
        $(this).find(".line").css("width", "100%");
    });
    $(".nav li").on("mouseleave", function(){
        $(this).find(".line").css("width","0");
    });

    // 모바일 메뉴버튼 클릭 했을 때
    $("#header .mo").on("click", function(e){
        e.preventDefault();
        $("#header .mo_menu").slideToggle(300);
    });

    // 슬라이드 배너
    /* 
        mainCarousel
        시간마다 시키는 timer
        애니메이션 효과를 갖고있는 slide
    */
    var i = 0,
        k = null, repeat;

    timer();
    function timer(){
        window.setInterval(function(){
            i++;
            k = i-1;
            if(i==3){
                i = 0;
            };

            slide();
        }, 3000);
    };

    function slide(){
        $(".white_box").css("left", "-100%").stop().animate({left:0}, 500, function(){
            $(".white_box").stop().animate({left:"100%"}, 500);
        });
        $("#main_slide > .slide_cover ul li").eq(i).addClass("on");
        $("#main_slide > .slide_cover ul li").eq(k).removeClass("on");
        $("#main_slide > .slide_cover ul li").eq(i).find("img").addClass("on");
        $("#main_slide > .slide_cover ul li").eq(i).find(".img_logo").addClass("on");
        $("#main_slide > .slide_cover ul li").eq(i).find(".img_text").addClass("on");
        $("#main_slide > .slide_cover ul li").eq(i).find(".box").addClass("on");
        $("#main_slide > .slide_cover ul li a img").removeClass("on");
    };
});