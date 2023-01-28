function tipocambio(){
    let xdolar=document.getElementById("xdolar");
    let xeuro=document.getElementById("xeuro");
    let xlibra=document.getElementById("xlibra");
    let xpeso=document.getElementById("xpeso");
    let cambio=parseInt(prompt("Ingrese monto"));
    let converdolar=cambio/567;
    let convereuro=cambio/610;
    let converlibra=cambio/696;
    let converpeso=cambio/30;
    xdolar.textContent=converdolar.toFixed(2);
    xeuro.textContent=convereuro.toFixed(2);
    xlibra.textContent=converlibra.toFixed(2);
    xpeso.textContent=converpeso.toFixed(2);

}