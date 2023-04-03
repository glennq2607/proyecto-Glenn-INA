let palabras = [["aeropuerto","pasajero"],
 ["dispositivo salida","impresora"],
 ["guanacaste","quinta provincia"],
 ["plaza","espacio publico"],
 ["celular","tecnologia"]
 ["cerveza","licor"],
 ["free fire","un juego"],
 ["roble","un arbol"],
 ["chirripo","volcan"],
 ["calor","verano"],
 ["lagarto","un animal"],
 ["el salvador","un pais"],
 ["nicaragua","un pais"],
 ["caramelo","dulce"],
 ["atleta","competicion"],
 ["escuela","centro estudio"],
 ["reposteria","una panaderia"]
 ["pesca","en el mar"],
 ["vehiculo","medio transporte"]];

 let  opcion = document.getElementById("palabra");
let  cont = 6;
let  buttons = document.getElementById("letra");
let  btnInicio = document.getElementById("reset");

 function generaPalabra(){
    rand = (Math.random()*19).toFixed(0);
    palabra = palabras[rand][0].toUpercase();
    document.write(palabra);
 };
 
 