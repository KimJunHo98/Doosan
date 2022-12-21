$(function(){
    // 풀다운메뉴
    $(".full_menu, ul.nav li").mouseover(function(){
        $(".full_menu").stop().slideDown(500);
    });
    $(".full_menu, ul.nav li").mouseleave(function(){
        $(".full_menu").stop().slideUp(500);
    });

    // nav
    $(".full_cover > ul > li").mouseover(function(){
        var i = $(this).index();
        
        $("ul.nav li").eq(i).find(".line").css("width","100%");
    });
    $(".full_cover > ul > li").mouseleave(function(){
        var i = $(this).index();
        
        $("ul.nav li").eq(i).find(".line").css("width","0");
    });

    // 
    $("ul.nav li").mouseover(function(){
        $(this).find(".line").css("width", "100%");
    });
    $("ul.nav li").mouseleave(function(){
        $(this).find(".line").css("width","0");
    });
});