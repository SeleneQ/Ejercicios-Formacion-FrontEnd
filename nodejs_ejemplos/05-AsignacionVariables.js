//Palabra const
//Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";
console.log(nombrePasajero);
console.log(apellidoPasajero);

//Palabra let
//Espacio de memoria que pueda cambiar durante la ejecucion del programa
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);

//Palabra var
//Espacio de memoria que pueda cambiar durante la ejecucion del programa
//El alcance de la variable
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

//Bloque
{
    nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let:"+nombreCompletoPasajero);
    console.log("Variable con var:"+nombreCompletoDelPasajero);
}

