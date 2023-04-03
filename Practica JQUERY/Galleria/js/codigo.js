$(function(){
    $("#mandarina").click(function(){
        let galeria=$("#mandarina").attr("src");
        $("#cambio").attr("src", galeria);

    });
    $("#tomate").click(function(){
        let galeria=$("#tomate").attr("src");
        $("#cambio").attr("src", galeria);
    
    });
    $("#pera").click(function(){
        let galeria=$("#pera").attr("src");
        $("#cambio").attr("src", galeria);   

    });

});