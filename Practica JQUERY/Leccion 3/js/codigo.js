$(function(){
let caja=$(".rojo").text();
$(".negro").text(caja);
$(".negro").append("HOLA MUNDO");
$(".negro").Prepend("HOLA MUNDO");
$(".azul").after(<div><p>ESTAMOS AGREAGANDO OTRO DIV CON P DESPUES DEL DIV ROJO</p></div>);
});