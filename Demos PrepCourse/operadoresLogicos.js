// and, y, nos permite conjugar dos o mas condiciones al mismo tiempo
// representado por -> && 

let mayorYmenorQue = (num) => {
  if (num > 5 && num < 10) console.log(true);
  else console.log(false);
}

mayorYmenorQue(2); //false
mayorYmenorQue(7); //true

let mayorYmenorYpar = (num) => {
  if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
  else console.log(false);
}

mayorYmenorYpar(7); //false
mayorYmenorYpar(8); //true

// or, o, nos permite conjugar dos o mas condiciones 
// representado por -> || 

let operadorOr = (strg) => {
  if (strg === 'Henry' || strg.length < 2) console.log(true);
  else console.log(false);
}

operadorOr('Henry'); // true
operadorOr('h'); //true
operadorOr('javascript'); // false
operadorOr('henry'); // false

//not o negacion, nos permite verificar condiciones opuestas a las normales. 
// representado por -> ! 

function negacion(permiso) {
  if (!permiso) console.log('Tiene Permiso'); // este pregunta por el valor opuesto por el parametro, ya que [or defecto el parametro es true]
}
// Por defecto los parámetros son true, al colocarle el ! (operador lógico  de negación) se estría preguntando por el valor opuesto del parámetro.

negacion(true);
// no imprime nada ya que preguntamos por el valor del permiso y este al ser negacion es falso por lo tanto no imprime nada

negacion(false);
// en este caso imprime 'Tiene Permiso' ya que que el parametro es falso y la condicion tambien es una negacion.

//seria lo mismo que esto

function negacion(permiso) {
  if (permiso === true) console.log('Tiene permiso');
}

negacion(true);
// imprime 'Tiene permiso'

function negacion(permiso) {
  if (permiso !== true) console.log('Tiene permiso')
}

negacion(true);
// no imprime nada ya que la condicion es que sea distinto al booleano true.


// ejemplo condicion compleja:

function negacion(num) {
  if (!( num < 2)) console.log(true)
  else console.log(false);
}

negacion(5);
// imprieme true

negacion (1);
// imprime false

function condicionCompleja(num) {
  if (num > 9 && num % 2 === 0 || num === 3) {
    console.log(true);
  }
  else console.log(false);
}

condicionCompleja(10); //true

condicionCompleja(6); //false

condicionCompleja(3); //true

condicionCompleja(5); //false



