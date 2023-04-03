$(function(){
    $("#boton").click(function(){
        $(".container>div").not(".verde, .rojo").css("border", "5px solid black")
    });

});