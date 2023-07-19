//Operadores de comparacion

const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

//Palabra reservada if 
//Evalua una condicion
//La instruccion es si ciudadDestino esta dentro de lista escribe vendo el pasaje
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log('Pasaje disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar');
}


const valorPasaje = "1000";
if (valorPasaje == 1000) {
    console.log('El pasaje vale 1000');
}


//Operadores logicos
//Y (AND) O (OR) NO (NOT)
//AND = && se deben cumplir las 2 condiciones
//OR = || se debe cumplir 1 condicion al menos
//NOT = ! No se cumple la condicion

let edadPasajero = 18;
let estaAcompañado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
    if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) &&
    (edadPasajero >= 18 || estaAcompañado)) {
       console.log('Pasaje disponible para venta');
    } else {
       console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
    }

//Aplicando logica negativa
edadPasajero = 17;
estaAcompañado = true;

if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) &&
    (edadPasajero >= 18) || estaAcompañado)) {
       console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
    } else {
       console.log('Pasaje disponible para venta');
    }

