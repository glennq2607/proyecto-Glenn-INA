let palabras = [
   "computadora",
   "guitarra",
   "cielo",
   "montaña",
   "sombrilla"
];
let pistas = [
   "dispositivo electrónico para trabajar o jugar",
   "instrumento musical de cuerda",
   "lo que está arriba",
   "lugar elevado en la tierra",
   "algo para protegerse de la lluvia"
];


let  cont = 6;
let aciertos = 0;
let ran = Math.floor(Math.random()*5);
let randonPal = palabras[ran];
let pistaRan = pistas[ran];


let aggPista = document.getElementById("opcion-pista");
function pista() {
   aggPista.innerHTML = pistaRan
   document.getElementById("pista").disabled = true;
   
};
let palOculta = [];
for (let i = 0; i < randonPal.length; i++) {
   palOculta[i] = "_ "
   
};
let palabra = document.getElementById("palabra");
palabra.innerHTML = palOculta.join("");

let botones = document.querySelectorAll("#abcdario button");
for (let j = 0; j < botones.length; j++) {
   botones[j].addEventListener("click", function() {
      let letra = this.innerHTML;
      let flag = false;
      for (let i = 0; i < randonPal.length; i++) {
         if (randonPal[i] == letra) {
            palOculta[i] = letra;
            aciertos+=1
            flag = true;
            botones[j].disabled = true;
            palabra.innerHTML = palOculta.join("");
         }else{
            botones[j].disabled = true;
         };
         
      };
      let imagenes = document.getElementById("ahorcados");
      let intentos = document.getElementById("intentos");
      let mensaje = document.getElementById("mensaje-final");
      if (flag == false) {
         cont-=1;
         if (cont==5) {
            imagenes.src = "imagenes/ahorcado_5.png";
            intentos.innerHTML = cont;

         }else if (cont==4) {
            imagenes.src = "imagenes/ahorcado_4.png";
            intentos.innerHTML = cont;

         }else if (cont==3) {
            imagenes.src = "imagenes/ahorcado_3.png";
            intentos.innerHTML = cont;

         }else if (cont==2) {
            imagenes.src = "imagenes/ahorcado_2.png";
            intentos.innerHTML = cont;

         }else if (cont==1) {
            imagenes.src = "imagenes/ahorcado_1.png";
            intentos.innerHTML = cont;

         }else if (cont==0) {
            imagenes.src = "imagenes/ahorcado_0.png";
            intentos.innerHTML = cont;
            mensaje.innerHTML = "¡Que pena! Has perdido el juego";
            for (let j = 0; j < botones.length; j++) {
               botones[j].disabled = true;
            };
         };

      };
      if (aciertos == randonPal.length) {
         mensaje.innerHTML = "Felicidades, lograste completar la palabra";
         for (let j = 0; j < botones.length; j++) {
            botones[j].disabled = true;
         };
         
      };


   });
   
}

