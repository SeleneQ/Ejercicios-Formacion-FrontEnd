//Tipos de datos
// Alfanumerico
let nombrePasajero = "Pedro Silva";
nombrePasajero = "Ramon Silva";

//Numerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//Logicos (true,false)
let boletoActivo = true;

//Operaciones Aritmeticas
//Suma
//let totalBoletos = valorBoleto + valorBoleto * porcentajeTasaEmbarque + gestionAgencia + impuestoAeropuerto;
//console.log (totalBoletos);
//Orden de precedencia
//()
//* y / 
//+ y -
let totalBoletos = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto)*porcentajeTasaEmbarque + gestionAgencia;
console.log (totalBoletos);

//Concatenacion de texto
let nombresPasajero = "Leonardo";
let apellidoPasajero = "Lacruz";

let nombreCompleto = nombresPasajero + apellidoPasajero;
//let pasaporte = '1000' + '12';
let pasaporte = parseFloat('1000') + parseInt('12');
//let multiplicacion = '1000' / '10';
let multiplicacion = parseInt('1000') / parseFloat('10');
console.log (nombreCompleto);
console.log (pasaporte);
console.log (multiplicacion);

