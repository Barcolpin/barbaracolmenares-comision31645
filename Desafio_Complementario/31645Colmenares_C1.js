//Crear un algoritmo que solicite al usuario uno ó mas datos. Luego con JC, realiza operaciones matemticas o de concatenacion sobre las entradas teniendo en cuneeta el tipo de dato. Al finalizar mostrar el resultado con alert() o console.log()

let Bienvenido = alert("Bienvenido a Mi Primer Desafio de Javascript - 31645COLMENARES_C1");

// let nombre = "Barbara";
// let apellido = "Colmenares";
// let misigno = "Sagitario";
const vacio =" ";
let añoActual = 2021;


let nombreCompleto = prompt("Por Favor Introduce tu Nombre completo:").toUpperCase() ;

alert("¡Hola"+ vacio+ nombreCompleto + vacio + "!");

let añoNacimiento = prompt("Por Favor Introduce tu año de nacimiento (AAAA):") ;
let tuEdad = añoActual - añoNacimiento

alert("¿Sabías que después de"+ vacio+ tuEdad + vacio + "años, se vive mejor?");

console.log("Mi nombre completo es:", nombreCompleto + vacio + "y tengo ",tuEdad, "años");


let Actividades = alert("Ahora te indico como hago algunas operaciones");

let numero1 = parseFloat(prompt('Ingrese un numero (puede incluir decimales):'));
let numero2 = parseFloat(prompt('Ingrese un numero (puede incluir decimales):'));


let resultadoDecimal = numero1 * numero2;
alert(`Realice una multiplicacion y el resultado final es: ${resultadoDecimal}${vacio}¡¡Gracias por participar!!`);

let resultadoEntero = parseInt(resultadoDecimal);
console.log("Resultado en numero entero es: ",resultadoEntero);



