class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log('Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años');
  }
}

var daniel = new Persona ('Daniel', 37);
daniel.saludar();

class Programador extends Persona {
  constructor(nombre, edad, añosDeExperiencia) {
    super(nombre, edad)
    this.añosDeExperiencia = añosDeExperiencia;
  }
  codear() {
    console.log('Mi nombre es ' + this.nombre + ' y tengo ' + this.añosDeExperiencia + ' años de experiencia');
  }
}

var programador = new Programador ('Martin', 29, 4);
programador.codear();
programador.saludar();

