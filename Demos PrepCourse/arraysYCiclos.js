
var array = [1, 2, 3, 4, 5];
// Tomamos un arreglo y hacemos un ciclo que recorre ese arreglo y nos imprime
// en pantalla los elementos que hay en cada posicion, en este caso numeros.
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// ****ejemplo 2****
// recibimos un string y tenemos que revisar si contiene la letra 'p'

//creamos una funcion que reciba el string, en la que tenemos que revisar letra por letra, para eso hay que transforar el string a un array con el metodo split

function encontrarLetraP(string) {
  let letras = string.split('');
  // ahora con todas las letras del string hecho un arreglo, lo recorremos con un for para buscar la letra 'p'
  
  for (var i = 0; i < letras.length; i++) {
    // aca ya estamos recorriendo el arreglo letra por letra, y podemos hacer un condicional para preguntar si la posicion de la letra que se esta iterando es igual a 'p' y que nos avise
    if (letras[i] === 'p') {
      console.log('Si contiene a "p"');
    }
  }
}

//llamamos a la funcion y le pasamos por parametro el string que queramos revisar
encontrarLetraP('javascript');
// Si contiene a "p"

// ****Ciclo while****

var array = [];

while (array.length < 5) {
  array.push('BOOM');
}

console.log(array);

