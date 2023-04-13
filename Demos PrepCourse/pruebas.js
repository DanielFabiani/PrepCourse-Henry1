
// ejercicio 1 funcion 3 del modulo 7
/* String.prototype.reverse = function() {
	var stringInvertido = "";
	for (let i = this.length - 1; i >= 0; i--) {
		stringInvertido = stringInvertido + this[i];
	}
	return stringInvertido;
}

var cadena = 'hola';
console.log(cadena.reverse()); */


// ********************************
// ejercicio 1 modulo Callback 
/* var nombre = 'daniel';
var arrayDeNombre = nombre.split('');
var mayuscula = arrayDeNombre[0].toUpperCase();
arrayDeNombre.shift();
arrayDeNombre.unshift(mayuscula);
var nombreMayuscula = arrayDeNombre.join('')
console.log(nombreMayuscula); */

// ********************************
// ejercicio 1 modulo 9
/* var objeto = {D: 1, B: 2, C: 3}

var arrDeArr = []
for (clave in objeto) {
	var arreglo = [clave, objeto[clave]]
	arrDeArr.push(arreglo);
}
console.log(arrDeArr); */

// ********************************
// ejercicio 2 modulo 9
/* var string = "adsjfdsfsfjsdjfhacabcsbajda";

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
	console.log(objeto); */


	// ********************************
// ejercicio 3 modulo 9
/* 	let string = 'soyHENRY';
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
	console.log(solucion);
 */

	
	// ********************************
	// ejercicio 4 modulo 9
/* 	
	var frase = "The Henry Challenge is close!";
	let arrayDeStings = frase.split(" ");
	let arrFraseInversa = [];

	for (var i = 0; i < arrayDeStings.length; i++) {
		let palabra = arrayDeStings[i];
		let palabraSeparada = palabra.split("");

		let arrPalabraReversa = palabraSeparada.reverse();
		let strDePalabraReversa = arrPalabraReversa.join('');
		arrFraseInversa.push(strDePalabraReversa);
	
	let fraseInversa = arrFraseInversa.join(' ')
	console.log(fraseInversa);
	} */



	// ********************************
	// ejercicio 5 modulo 9
/* 
	let numero = 153;
	let numToStr = numero.toString();
	//console.log(numToStr);
	let numeroReverse = numToStr.split('').reverse().join('');
	//console.log(numeroReverse);
	if (numero == numeroReverse) {
		console.log ('Es capicua');
	} else console.log ('No es capicua')


	// ********************************
	// ejercicio 6 modulo 9

	let string = 'abcdefg';
	let strToArra = string.split('');
	let arrSinAbc = [];

	for (var i = 0; i < strToArra.length; i++) {
		if (strToArra[i] != 'a' && strToArra[i] != 'b' && strToArra[i] != 'c' ) {
			arrSinAbc.push(strToArra[i]);
		}
	}
	let strSinAbc = arrSinAbc.join('');
	console.log (strSinAbc); */


	 // ********************************
	// ejercicio 7 modulo 9
	// solucion 1
/*    let newArrayOfStrings = [];
	for (var i = 0; i < arrayOfStrings.length; i++) {
		var string = arrayOfStrings[i];
		var arrayDelStr = string.split('');
		//console.log(arrayDelStr.length);

		for (var j = i+1; j < arrayOfStrings.length; j++) { // j comienza desde i+1 para evitar comparaciones repetidas
			var string2 = arrayOfStrings[j];
			var arrayDelStr2 = string2.split('');
			//console.log(arrayDelStr2.length);

			if (arrayDelStr.length > arrayDelStr2.length)  {
				[arrayOfStrings[i], arrayOfStrings[j]] = [arrayOfStrings[j], arrayOfStrings[i]]; // intercambia los elementos del arreglo
				[arrayDelStr, arrayDelStr2] = [arrayDelStr2, arrayDelStr]; // intercambia los arrays de caracteres
			}
		} 
		newArrayOfStrings.push(arrayOfStrings[i]); // agrega el elemento ordenado al nuevo arreglo
	}
	return (newArrayOfStrings); */

// solucion 2
/* 
	let arrayOfStrings = ["You", "are", "beautiful", "looking"];

	let newArray = arrayOfStrings.slice(); // crea un acpia del array 
	newArray.sort(function(a, b) { // sort ordena el array pero en orden UNICODE, para que ordene de menor a mayor se usa una funcion comparativa, donde los 2 parametros hacen la comparacion de los elementos y se retorna una resta para asi pocicionar el menor primero, usando .length comparamos las longitudes de los arreglos
		return a.length - b.length;
	})
	console.log(newArray); */

	// ********************************
	// ejercicio 7 modulo 9
/*    let array1 = [4,2,3];
	let array2 = [1,3,4];
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
	console.log(newArray); */

	//termino

	// ********************************
	// henry challenge

	// ej 01
/*    let numeros = [9, 17, 6, 2, 4]
	console.log(numeros);
	let mayorYMenor = [];

	let newArray = numeros.slice();

	newArray.sort(function(a,b) {
	return a - b
	})
	console.log(newArray);

	let menor = newArray[0];
	let mayor = newArray[newArray.length -1 ];
	//console.log(menor);
	//console.log(mayor);

	mayorYMenor.unshift(menor);
	mayorYMenor.push(mayor);

	console.log (mayorYMenor); */

	// ej 02
/*    let strings = ['hi', 'hello', 'ni hao', 'guten tag'];
	let caracteres = 5

	let newArray = [];

	for (let i = 0; i < strings.length; i++) {

		let str = strings[i].length;
		if (str === caracteres ) {
			newArray.push(strings[i])
		}
	}
	console.log (newArray); */

	// ej 03
/* 
	function esPrimo(num) {
		if (num < 2) return false;
		for (let i = 2; i < num; i++) {
			if (num % i === 0) return false;
		}
		return true;
	}

	let array = [1, 5, 2, 9, 3, 4, 11];
	let sumaDePrimos =0

	for (let i = 0; i < array.length; i++) {
		let primo = array[i];
		if (esPrimo(primo)) {
			sumaDePrimos += primo;
		}
	}
	console.log(sumaDePrimos); */

	// ej 04

/* 	let array = [2,5,7,10,11,15,20];
	let n = 14;
	
	for (let i = 0; i < array.length; i++) {
		let num = array[i];

		for (let j =  i + 1; j <array.length; j++) {
		let num2 = array[j];
		let suma = num + num2;
  
		if (suma === n) {
				return true;
		} 
		}
	}
	return false; */

  // ej 5

  let amigos = [{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }];
  let propiedad = { edad: null};

  for (var i = 0; i < amigos.length; i++) {
    let amigo = amigos[i];

    if (!(propiedad in amigo)){
      amigos.propiedad;
    }

  }
  console.log(amigos);


