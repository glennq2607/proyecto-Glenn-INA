
let n1,n2,n3,n4,n5,promedio;
     
   n1 = parseInt(prompt("Primer nota"));
   n2 = parseInt(prompt("Segunda nota"));
   n3 = parseInt(prompt("Tercer nota"));
   n4 = parseInt(prompt("Cuarta nota"));
   n5 = parseInt(prompt("Quinta nota"));
   promedio = (n1+n2+n3+n4+n3+n4+n5)/5
   
	if(promedio >= 70)
    {
		document.write("El promedio es "+promedio+" APROBADO");
	}else{
		document.write("El promedio es "+promedio+" REPROBADO");
	}