
$(function(){
$("#agregar").on("click", function(){
    $("#titulo").addClass("formato");
})

$("#quitar").on("click", function(){
    $("#titulo").removeClass("formato");
})

$("#titulo").hide(10000);
$("#titulo").show(10000);
});

