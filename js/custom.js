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
    
});