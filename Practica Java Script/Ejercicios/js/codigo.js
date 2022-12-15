// número par y número impar

let numero;
numero=prompt("Numero");

if (numero %2 ==0) {
    document.write("El numero "+ numero + " es par ");
    
}else{
    document.write("El numero"+ numero + " es impar ");
}


// Notas aprobado Reprobado

let numero;
numero=prompt("Escriba la Nota");

if (numero >=70) {
    document.write("Aprobado");
    
}else{
    document.write("Reprobado ");
}


// Numeros Positivo y negativo

let num=parseInt(prompt("Ingrese un número"));

if (num>0){
    alert("El número es positivo"),
}else{
    alert("El número es negatvo");
}
