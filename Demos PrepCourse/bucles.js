let suma = 0;

for (let i = 0; i < 10; i++) {
  suma = suma + 1;
  console.log(suma);
}
console.log('El total de la suma luego de las iteraciones del bucle es: ' + suma);

for (let i = 0; i < 5; i++) {
  suma = suma + i;
  console.log('Conteo de la variable de iteracion: ' + i);
}
console.log('Variable suma: ' + suma); 

/* Conteo de la variable de iteracion: 0
Conteo de la variable de iteracion: 1
Conteo de la variable de iteracion: 2
Conteo de la variable de iteracion: 3
Conteo de la variable de iteracion: 4
variable suma: 10 */

/* vuelta 1
i = 0
suma = 0

vuelta 2
i = 1
suma = 1

vuelta 3
i = 2
suma = 3

vuelta 4
i = 3
suma = 6

vuelta 5
i = 4
suma = 10 */

// ciclo while

while (suma < 3) {
  suma += 1;
  console.log(suma);
}

