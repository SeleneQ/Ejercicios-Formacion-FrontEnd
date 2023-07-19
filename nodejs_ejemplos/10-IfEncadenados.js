const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
let edadPasajero = 17;
let estaAcompañado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
//Verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompañado) {
    //Evaluamos si la ciudad esta disponible para viajar
   if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
       console.log('Pasaje disponible para venta');
   } else {
       console.log('Ciudad no disponible para viajar');
   } 
} else {
    if (edadPasajero >= 16 && ciudadDestino == 'Lima') {
    } else {
    console.log('Pasajero no cumple con las reglas');
}
}
