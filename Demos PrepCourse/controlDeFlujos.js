
function viajar(destino) {
  if (destino == "Brasil") {
    console.log("Gire a la Derecha");
  } else if (destino == "Argentina") {
    console.log("Gire a la Izquierda");
  } else {
    console.log("Te perdiste");
  }
};

viajar("uruguay");

function puedoManejar(edad) {
  if (edad >= 18) {
    console.log('Puede manejar');
  } else {
    console.log('No puede manejar');
  }
};

puedoManejar( 16 );

