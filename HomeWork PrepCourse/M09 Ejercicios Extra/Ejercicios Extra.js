/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayDeArrays = []; // arreglo padre
   for (key in objeto) { // recorre el objeto
      var array = [key, objeto[key]] // array hijo donde guarda cada par clave valor
      arrayDeArrays.push(array); // pushea al array padre los hijos
   }
   return arrayDeArrays; // retorna arreglo de arreglo
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arrDeStr = string.split('');
   var objeto = {};

   for (var i = 0; i < arrDeStr.length; i++) {
      var cantidadDeVecesL = 0;
      var letra = arrDeStr[i];

      for (var j = 0; j < arrDeStr.length; j++) {
         var letra2 = arrDeStr[j];
         if (letra === letra2) {
            cantidadDeVecesL += 1;
         }
      } 
      objeto[letra] = cantidadDeVecesL;
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let strToArr = string.split('');
   var mayuscula = [];
   var minuscula = [];
   //var mayusculaAscciCode = [];

   for (var i = 0; i < strToArr.length; i++) {
      var letra = strToArr[i];
      var ascciCode = letra.charCodeAt();
      if (ascciCode <= 90) {
         var char = String.fromCodePoint(ascciCode);
         mayuscula.push(char);
      } else {
         char = String.fromCodePoint(ascciCode);
         minuscula.push(char);
      }
      
   }
   var mayusculasPrimero = mayuscula.join('')
   var minusculasDespues = minuscula.join('')
   var solucion = mayusculasPrimero + minusculasDespues;
   return solucion;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arrayDeStings = frase.split(" ");
   let arrFraseInversa = [];

   for (var i = 0; i < arrayDeStings.length; i++) {
      let palabra = arrayDeStings[i];
      let palabraSeparada = palabra.split("");

      let arrPalabraReversa = palabraSeparada.reverse();

      let strDePalabraReversa = arrPalabraReversa.join('');

      arrFraseInversa.push(strDePalabraReversa);
   }
   let fraseInversa = arrFraseInversa.join(' ')
   return fraseInversa;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numToStr = numero.toString();
   let numeroReverse = numToStr.split('').reverse().join('');

   if (numero == numeroReverse) {
      return ('Es capicua');
   } else return ('No es capicua')
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let strToArra = string.split('');
   let arrSinAbc = [];

   for (var i = 0; i < strToArra.length; i++) {
      if (strToArra[i] != 'a' && strToArra[i] != 'b' && strToArra[i] != 'c' ) {
         arrSinAbc.push(strToArra[i]);
      }
   }
   let strSinAbc = arrSinAbc.join('');
   return (strSinAbc);
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let newArray = arrayOfStrings.slice(); 
   newArray.sort(function(a, b) {
      return a.length - b.length;
   })
   return newArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = [];

   for (let i = 0; i < array1.length; i++) {
      let elemento1 = array1[i];

      for (let j = 0; j < array2.length; j++) {
         let elemento2 = array2[j];

         if (elemento1 === elemento2) {
            newArray.push(elemento2);
         }
      }

   }
   return newArray;
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
