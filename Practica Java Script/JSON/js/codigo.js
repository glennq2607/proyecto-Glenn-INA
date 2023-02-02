// let empleado={
//     nombre:"Glen Quijano",
//     aumento:100,
//     salario:2000,
//     // calculoHoras:function(){
//         return this.aumento+this.salario;
//     }
// }

// console.log(empleado.calculoHoras());


let persona1={
    nombre:"Glen Quijano",
    edad:43,
    canton:"La Cruz",
}

let persona2={
    nombre:"Yazmin Rodriguez",
    edad:"19",
    canton:"Cajón"
}

let imprimirNombre=function(){
    console.log(this.nombre + " edad " + this.edad);
}

imprimirNombre.call(persona1);