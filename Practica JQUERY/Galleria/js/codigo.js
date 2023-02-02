$(function(){
    $("#mandarina").click(function(){
        let galeria=$("#mandarina").attr("scr");
        $("#cambio").attr("src", galeria);
        $("#cambio").css("display", "flex");

    });
    $("#tomate").click(function(){
        let galeria=$("#tomate").attr("scr");
        $("#cambio").attr("src", galeria);
        $("#cambio").css("display", "flex");

    });
    $("#pera").click(function(){
        let galeria=$("#pera").attr("scr");
        $("#cambio").attr("src", galeria);
        $("#cambio").css("display", "flex");

    });

});