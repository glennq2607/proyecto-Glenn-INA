let 
	cantidad = 0;
	precio = 0;
	total = 0;
	cArticulo = 0;
	final = 1;
	while (final==1) {
		document.write("Digite la cantidad de articulos",'<BR/>');
		cantidad = parseInt(prompt("Ingrese cantidad"));
		document.write("Digite el precio articulo",'<BR/>');
		precio = parseInt(prompt());
		document.write("Si desea continuar escriba s o n para salir",'<BR/>');
		final = Number(prompt());
		total = total+precio*cantidad;
		cArticulo = cArticulo+1;
	}
	document.write("El monto total de la factura  ",total,'<BR/>');
	document.write("La cantidad de articulos distintos es de  ",cArticulo,'<BR/>');

