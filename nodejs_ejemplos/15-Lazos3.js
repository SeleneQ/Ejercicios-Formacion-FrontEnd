const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
const precioCiudad = new Array(500,400,380,200);
//esto es una lista de mapas
const datos = [
    {
    'ciudad': 'Bogota',
    'precio': 500
    },
    {
    'ciudad': 'Lima',
    'precio': 400
    },
    {
    'ciudad': 'Santiago',
    'precio': 380
    },
    {
    'ciudad': 'Montevideo',
    'precio': 200
    },
];
const presupuestoDisponible = 400;

//Nota: i siempre arranca en o desde la posicion 0 y es i de index

//While...0 o mas veces
//Do...1 o mas veces
/*while(i < datos.length && datos[i].precio > presupuestoDisponible) {
    i++;
}
if (i == datos.length)
console.log("No tenemos pasajes disponibles");
else
console.log("Puedes comprar pasaje para: "+datos[i].ciudad);*/
//for...valor inicial para un valor final
let ciudadSeleccionada = '';
for (let i = 0; i < datos.length && ciudadSeleccionada == ''; i++) {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }  
}
 
if (ciudadSeleccionada == '')
    console.log("No tenemos pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);
