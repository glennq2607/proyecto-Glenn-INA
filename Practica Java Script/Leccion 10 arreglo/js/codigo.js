let dias= ["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];
console.log(dias[6]);
dias.push("hola") // Agregar nuevo elemento al final arreglo
dias.unshift("Glenn") // Agregar un nuevo elemento al inicio del vector
console.log(dias);

dias.pop(); // Eliminar elemento del vector
dias.shift(); // Eliminar primer elemento del vector
console.log(dias);

let dias2=dias.slice(0,5); // Extrae una copia a partir de la posición 0 a 4
console.log(dias2);