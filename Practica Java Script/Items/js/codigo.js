let etiquetas=document.getElementsByTagName("li");
etiquetas[0].style.fontSize="40px";
etiquetas[2].style.fontSize="40px";


let caja=document.querySelector("input");
let elem=document.querySelectorAll(".elemento:nth-child(odd)");
document.getElementById("miBoton").addEventListener("click",function(){
    caja.value="Glen Quijano";
    for (let index = 0; index < 5; index++){
        elem[index].style.color="green";
    }
})