
var listaDeCompras = []; // array creado 

listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'lechuga';
// console.log(listaDeCompras);

var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);
// Lechuga

// como saber cuantos elementos tiene un array, su longitud
console.log(listaDeCompras.length);
// 4

// ************* metodo length

/* let nombres = ['Daniel', 'Matias', 'Maria', 'David'].length;

console.log(nombres); */
// 4

// metodos

var colores = ['azul', 'amarillo'];
colores.push('rojo');
colores.unshift('verde');
colores.pop();
colores.shift();
console.log(colores);

// metodo .includes
let nombres = ['Daniel', 'Matias', 'Maria', 'David'];

let incluyeNombre = nombres.includes('Daniel');
console.log(incluyeNombre);
// true


// metodo .every

let numerosEnteros = [1, 6, 8, 9];
// el array y su metodo se coloca dentro de una variable para asi llamar solo la variable
let mayorQueCinco = numerosEnteros.every((num) => {
  return num > 5
})
console.log(mayorQueCinco);
// retorna false, ya que no cumple la funcion de que todo los elementos sean mayor a 5

// metodo .split

var palabra = 'Henri';
console.log(palabra);
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);
// [ 'H', 'e', 'n', 'r', 'i' ]

palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);
//[ 'H', 'e', 'n', 'r', 'y' ]

// metodo .join
var palabraArreglada = palabraSeparada.join(''); // junta todos los caracteres sin dejar espacios vacios
console.log(palabraArreglada);
//Henry

// metodo .forEach
var numeros = [1, 2, 3, 4, 5];

numeros.forEach((num) => {
  console.log(num);
})

numeros.forEach((num) => {
  if (num === 3) {
    console.log(num);
  }
})

// metodo .map
var numerosMasUno = numeros.map((num) => {
  return num + 1;
});
console.log(numerosMasUno);








