let resultado=document.getElementById("resultado");
function mostrar(datos){
    resultado.value+=datos;
};

function eliminar(){
    resultado.value=resultado.value.slice(0,-1);
}
function borrar(){
    resultado.value="";
}
function negativo(){
    resultado.value=-1*+resultado.value;
}
function raizcuadrada(){
    resultado.value=Math.sqrt(resultado.value);
}
function porcentaje(){
    resultado.value=(Number(resultado.value)/100).toString();
}
function igual(){
    resultado.value=eval(resultado.value);
}
