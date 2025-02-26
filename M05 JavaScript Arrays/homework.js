/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
return array.shift();
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let newArray = [];
   for(let i = 0; i < array.length; i++){
      newArray.push(array[i] + 1); 
   }
   return newArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let newArray = [];
   return newArray = array.concat(elemento);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if(array.includes(elemento)){
      return true
   } else {
      return false;
   
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let result = 0;
   for( let i = 0; i < arrayOfNums.length; i++){
      result = result + arrayOfNums[i];
   }
   return result;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let result = 0;
   for(let i = 0; i < resultadosTest.length; i++){
      result = result + resultadosTest[i];
   }
   return result / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var result = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
   if(arrayOfNums[i] > result){
      result = arrayOfNums[i]
   }
   }
   return result;
   // return Math.max(arrayOfNums);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   if (arguments[0] == undefined) return 0;
   var result = 1;
   for( let i = 0; i <= arguments.length -1; i++){
         result = result * arguments[i];
      }
      return result;
   // let res = arguments.reduce((p,c) => p*c)

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let elements = 0;
   for( let i = 0; i < array.length; i++){
      if(array[i] > 18){
        elements++;
      }
   }
   return elements;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7)  return "Es fin de semana";
   if(numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4  || numeroDeDia === 5) return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if(num.toString()[0] === "9") return true;
   return false;

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for(let i = 0; i < array.length; i++){
      if(array[i] === array[i + 1]){
         return true
      } else {
         return false
      }
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let newArray = array.filter( i => i === "Marzo" || i === 'Noviembre' || i === "Enero" );
   // for(let i = 0; i < array.length; i++){
   //    if(array[i] === "Marzo" || array[i] === 'Noviembre' || array[i] === "Enero"){
   //       newArray.push(array[i])
   //    }
   // }
   if (newArray.length < 3){return 'No se encontraron los meses pedidos';} else {return newArray;}

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let table = [];
   for( let i = 0; i < 11; i++ ){
      table.push(6 * i);
   } 
   return table;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   // let newArray = [];
   // for( let i = 0; i < array.length; i++){
   //    if(array[i] > 100 && array[i] <= 200 ){
   //       newArray.push(array[i]);
   //    }
   // }
   // return newArray;

   let newArray = array.filter((i) => i > 100 && i <= 200)
   return newArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   // let newNum = num;
   // let newArray = [];
   // for( let i = 0; i < 10; i++){
   //    newNum += (num + 2)
   //    if(newNum === i) break
   //    else {
   //       newArray.push(newnum)
   //    }
   //    }

   //    if( i < 10) return "Se interrumpió la ejecución"
   //    else {
   //       return newArray;
   //    }
   var array = [];var suma = num;for (var i = 0; i < 10; i++) {suma = suma + 2;if (suma === i) break;else {array.push(suma);}}if(i < 10) {return 'Se interrumpió la ejecución';} else {return array;}
   }


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let array = [];
   let number = num;

   for(let i = 0; i < 10; i++){
   
      if(i === 5) continue;
      else {
         number = number + 2;
         array.push(number)
      }
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
