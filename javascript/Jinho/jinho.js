// faq script 시작
$(document).ready(function(){
    $(".faq .q:eq(0)").click(function(){
        $(".faq .a_box:eq(0)").slideToggle(100,"linear");
        $(".faq .a_box:not(:eq(0))").slideUp(100,"linear");
    })
    $(".faq .q:eq(1)").click(function(){
        $(".faq .a_box:eq(1)").slideToggle(100,"linear");
        $(".faq .a_box:not(:eq(1))").slideUp(100,"linear");

    })
    $(".faq .q:eq(2)").click(function(){
        $(".faq .a_box:eq(2)").slideToggle(100,"linear");
        $(".faq .a_box:not(:eq(2))").slideUp(100,"linear");

    })
    $(".faq .q:eq(3)").click(function(){
        $(".faq .a_box:eq(3)").slideToggle(100,"linear");
        $(".faq .a_box:not(:eq(3))").slideUp(100,"linear");

    })
    $(".faq .q:eq(4)").click(function(){
        $(".faq .a_box:eq(4)").slideToggle(100,"linear");
        $(".faq .a_box:not(:eq(4))").slideUp(100,"linear");

    })
    $(".faq .q:eq(5)").click(function(){
        $(".faq .a_box:eq(5)").slideToggle(100,"linear");
        $(".faq .a_box:not(:eq(5))").slideUp(100,"linear");

    })
    $(".faq .q:eq(6)").click(function(){
        $(".faq .a_box:eq(6)").slideToggle(100,"linear");
        $(".faq .a_box:not(:eq(6))").slideUp(100,"linear");

    })
    $(".navi li").mouseover(function(){
        $(this).children(".submenu").stop().slideDown();
    });
    $(".navi li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp();
    })
});



// faq script 종료

