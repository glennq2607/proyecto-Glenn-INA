$(function(){
    $("section>h1").click(function(){
        $(this).hide();
    })
});

$("section>p").click(function(){
    $(this).addClass("formato");
});

$("section>p").dblclick(function(){
    $(this).removeClass("formato");
});


$("#btn1").click(function(){
    $("section>h1").css("background-color","white").css("color","green").css("font-size","30px")
 append("cambios de color");   
});

