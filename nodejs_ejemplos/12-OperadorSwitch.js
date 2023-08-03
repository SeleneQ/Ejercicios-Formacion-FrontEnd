const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
const ciudadDestino = "Quito";

let valorPasaje = 0;

// se lee: si ciudadDestino es = a Bogota el valor del pasaje es = a 500 dolares de lo contrario si la ciudad destino es = a Lima el valorPasaje es de 400 dolares
console.log(`Verificando pasajes para ${ciudadDestino}`);

/*if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
    //Condicion con if
    
    valorPasaje = 500;
   } else if (ciudadDestino == "Lima") {
    valorPasaje = 400;
   } else if (ciudadDestino == "Santiago") {
    valorPasaje = 380;
   } else if (ciudadDestino == "Montevideo") {
    valorPasaje = 200;
   }*/
switch(ciudadDestino) {
    case "Bogota":
        valorPasaje = 500;
        break;
    case "Lima":
        valorPasaje = 400;
        break;
    case "Santiago":
        valorPasaje = 380;
        break;
    case "Montevideo":
        valorPasaje = 200;
        break;
    default:
        console.log(`No hay pasajes para la ciudad indicada`);
        break;
}
if (valorPasaje > 0)
        console.log(`El valor del pasaje es: ${valorPasaje}`);
    