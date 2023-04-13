function cuidadoConElConsoleLog(nombre) {
  console.log(nombre); // el console.log nos ayuda a imprimir el argumento (nombre) de la funcion
  return nombre; // nos retorna el valor de la funcion con un string con la palabra que se le pase por parametro a la funcion
};

// en consola:
/* > cuidadoConElConsoleLog('Daniel');
Daniel
'Daniel' */

function otraFuncion() {
  return (
    "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog('Daniel')
    );
};

