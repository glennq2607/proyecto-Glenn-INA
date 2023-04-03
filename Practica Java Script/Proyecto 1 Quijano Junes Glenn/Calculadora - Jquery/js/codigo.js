let resultado=$("#resultado");
function mostrar(datos){
    $(resultado).val(resultado.val()+datos);
};

function eliminar(){
    $(resultado).val(resultado.val().slice(0,-1));
}
function borrar(){
    $(resultado).val("");
}
function negativo(){
    $(resultado).val(-1*+resultado.val());
}

function raizcuadrada(){
    $(resultado).val(Math.sqrt(resultado.val()));
}
function porcentaje(){
    $(resultado).val((Number(resultado.val())/100).toString());
}
function igual(){
    $(resultado).val(eval(resultado.val()));
}
$("#fraccion").click(function(){
    $(resultado).val((1/(parseFloat(resultado.val()))).toString());
});
