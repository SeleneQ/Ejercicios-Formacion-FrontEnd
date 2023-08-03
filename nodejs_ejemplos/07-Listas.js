const ciudad1 = "Bogotá";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

//Definición de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago");
//console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina"];
//console.log(paisesDisponibles);

//con push agrego un nombre nuevo o un elemento extra a la lista del array y este se va a agregar al final de la lista
// con unshift agrego un nuevo elemento al principio de la lista del array
{
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('Montevideo');

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);

    paisesDisponibles.unshift('Ecuador');
    ciudadesDisponibles.unshift('Quito');

    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);
}

//si yo quiero que se muestre un solo elemento de la lista, recuerda que en JS las posiciones numericas van de 0,1,2 y como ahi son solo 3 elementos pero se arranca de 0
{
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('Montevideo');

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);

    paisesDisponibles.unshift('Ecuador');
    ciudadesDisponibles.unshift('Quito');
    //mostrando el primer elemento de la lista
    console.log(paisesDisponibles[0]);
    console.log(ciudadesDisponibles[0]);

    //con splice puedo borrar un elemento con el numero de la posicion y agregar nuevos elementos a la lista
    paisesDisponibles.splice(1,2,'Venezuela','Paraguay');
    console.log(paisesDisponibles);
}





