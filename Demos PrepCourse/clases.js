
// cases con funcion constructora 
// clase autos
function Auto(puertas, color, marca, año, ruedas) {
  this.puertas = puertas;
  this.color = color;
  this.marca = marca;
  this.año = año;
  this.ruedas = ruedas;
  this.informacion = () => {
    console.log('Este es un auto: ' + this.marca + ' de color ' + this.color);
  }
}

// inicializacion de la clase

var miPrimerAuto = new Auto(4, 'Negro', 'Renault', 2018, 4);

console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);

miPrimerAuto.informacion();



// ************** 
// Expresion de clase,  ECMAS6
class Auto {
  constructor (puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
  }
  // agregando un metodo (No una propiedad) a la clase, este va fuera del constructor
  informacion() {
    console.log('Este es un auto: ' + this.marca + ' de color ' + this.color);
  }
}

// agregando valores a la propiedades de la nueva instancia Auto
var miPrimerAuto = new Auto(4, 'Negro', 'Renault', 2018, 4);

console.log(miPrimerAuto);
console.log(miPrimerAuto.color);

// accedemos al metodo desde la instancia
miPrimerAuto.informacion();


// *****************************************
// ejemplo usando el metodo this

class Football {
  constructor(jugador) {
    this.jugador = jugador;
  }
  obtenerNombre() {
    console.log(this.jugador);
  }
}

var argentina = new Football ('Messi');
var brasil = new Football ('Pele');

argentina.obtenerNombre();
brasil.obtenerNombre();
