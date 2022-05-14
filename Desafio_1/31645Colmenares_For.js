// Tomando como base los ejemplos anteriores de la estructura for while y do..while, crear un algoritmo que repita un bloque de instrucciones.
// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

// Definicion de variables

let pedirNumero = parseInt(prompt("Hagamos la tabla de suma con el numero que ingreses"));

// Inicio del programa
// Inicialozo la variable a usar para que repita el proceso 10 veces
        for (let i = 0; i <=10; i++) {
            let resultado = pedirNumero + i;
           
                alert(pedirNumero +" "+ "+" + " " + i + " "+ "=" + resultado);
                // Si el resultado es igual a valor maximo del recorrido del for, debe comparar, mostrar mensaje y salir
                if (resultado === 10){
                    alert("Usted llegó al valor máximo permitido: "+ resultado);
                
                   break;
                } 
                alert("Lleva acumulado: "+ resultado);  // aqui indica lo acumulado en cada pasada del ciclo
                
            }
              
 
           
            
        
      

 