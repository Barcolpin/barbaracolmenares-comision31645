//Crear un algoritmo que solicite al usuario uno ó mas valores ingresados por prompt(), compare las entradas y en funcion de ciertas condiciones, muestra un resultado

let Bienvenido = alert("Desafio Entregable de Javascript- 31645colmenares");

//declaracion de variables
let nombreCompleto = prompt("Por Favor Introduce tu Nombre completo:").toUpperCase() ;

let numero = parseInt(prompt("Indique el presupuesto con el que cuenta para comprar en Afloranzza:"));

// Pedir un número por prompt y evaluar si está entre 1000 y 2500. En caso positivo mostrar un alert
//Inicio de programa
if ((numero > 1000) && ( numero < 5000)){
    alert(nombreCompleto + " " + "Con el monto que ingresaste puedes comprar un arreglo floral de 12 rosas");
    
}else{ 
     alert(nombreCompleto + " " +"Disculpa pero con ese monto no te alcanza para comprar en Afloranzza");
}