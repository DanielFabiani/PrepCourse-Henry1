// Vamos agregar un nuevo metodo al constructor
// Ejemplo 1:
// transformar todos los numeros mayores a 3 en false
// tenemos que buscar en el arreglo los numeros mayores a 3, por lo que hay que recorrer el erreglo
//mayorQueTres es el nombre que le damos al metodo
Array.prototype.mayoresQueTres = function() {
  var arregloModificado = [];

  for (let i = 0; i < this.length; i++) { // this equivale al arreglo que esta invocando el metodo
    if (this[i] > 3) {
      arregloModificado.push(false);
    } else {
      arregloModificado.push(this[i]);
    }
  }
  return arregloModificado;
}
// aca el metodo es agregado al constructor del objeto global array

var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var nuevoArreglo = arreglo.mayoresQueTres();

console.log(nuevoArreglo);
/* [
  1,     2,     3,
  false, false, false,
  false, false, false
] */

// Ejemplo 2
// creamos una clase con un arreglo de paises
class LatinoAmerica {
  constructor() {
    this.paises = [];
  }
}

// metodo agragado al constructor de la clase Latinoamerica. que va agregar los paises
LatinoAmerica.prototype.agregarPaises = function (pais) {
  this.paises.push(pais);
}

// nueva instancia de la clase LatinoAmerica
var continente = new LatinoAmerica();

// usamos el nuevo metodo, que pushea el valor 'Venezuela' a la propiedad paises, que se creo en la clase, a tarvez del metodo .agregarPaises que creamos a la instancia continente.
continente.agregarPaises('Venezuela')

// imprimios el valor de la propiedad de la instancia america.
console.log(continente.paises);


