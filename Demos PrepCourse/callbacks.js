var devuelveUsuario = function () {
  return 'Daniel';
}

var devuelveSaludo = function () {
  return 'Hola';
}

// funcion callback, que recibe por parametro dos definiciones funciones
var saludar = function (cb1, cb2) {
  // y ejecuta las funciones invocadas con sus () pasadas por parametros 
  return cb1() + ' ' + cb2();
}

var resultado = saludar(devuelveSaludo, devuelveUsuario);
console.log(resultado);

// ********************************
// ejemplo 2:

var devuelvoFrase = function(comida) {
  return 'Hoy quiero comer ' + comida;
}

var hablar = function(comida, cb) {
  return cb(comida);
}

var resultado = hablar('Pizza', devuelvoFrase);
console.log(resultado);

