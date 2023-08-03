const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 17;
let estaAcompañado = true;
let tienePasaporte = true;
let estaCasado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
// A && B || C se lee asi: Si(ciudadEstabaDisponible && edadPasajero > 18 || Acompañado) {}
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 &&
       edadPasajero >= 18 && 
       tienePasaporte && 
        !estaCasado) {
       console.log('Paquete para solteros disponible para venta');
    } else {
       console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
    }
