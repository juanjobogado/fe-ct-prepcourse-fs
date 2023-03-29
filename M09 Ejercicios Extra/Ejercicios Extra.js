/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = Object.entries(objeto);
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let result={}; //Objeto que guardará el resultado

    for(let i=0; i<string.length; i++){
        if (result[string[i]]){ //Existe la propiedad???
            result[string[i]]++; //Si existe, le sumamos 1
        }
        else{ //No existe. La creamos con valor 1
            result[string[i]]=1; 
        }
    }
    return result;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let newStringUpper = "";
   let newStringLower = "";

   for(let i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase()){
         newStringUpper = newStringUpper + string[i];
      } else if(string[i] === string[i].toLowerCase() ){
         newStringLower = newStringLower + string[i];
      }
   }
   return newStringUpper + newStringLower;
}

function asAmirror(str) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let mirror = "";
   for (let i = 0; i < str.length; i++) {// recorremos el string
       if (str[i] === " ") {// si en el indice hay un espacio
           mirror = "-" + mirror;// concatena un guion- para ver el espaciado
       }else{// de lo contrario concatena lo que hay en el indice con el mirror
          mirror = str[i] + mirror; // hola => h + '', o + h, l + oh, a + loh = aloh
       }
   }
   return mirror.split("-").reverse().join(" ");//.split() separa por valores guion- en palabras, .rever() invierte en orden de las palabras y .join() junta todo con "espacio" entre cada palabra 
   }
   

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let str = numero.toString();
   if(str.split("").reverse().join("") == numero) return  "Es capicua" 
   else return "No es capicua";

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let newString = "";
   for(let i = 0; i < string.length; i++){
      if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
      newString += string[i];
      }
   }
   return newString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
return arrayOfStrings.sort()

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = [];
   for(let i = 0; array1.length; i++){
      for(let e = 0; array2.length; e++){
         if( array1[i] === array2[e]){
      newArray.concat(array1[i])
         } else if(array1[i] !== array2[e]){
            return [];
         }
      }
      return newArray;
   }

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
