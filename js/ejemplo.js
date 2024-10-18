let arreglo=[];
function agregarDatosHastSalir (){
    let palabraClave = "Salir";
    let dato;
    // agregar datos a arreglo
    do {
        dato= prompt("Ingresa un dato o escribe ${palabraCalve} para salir");
        if(dato.toLowerCase().trim() !== palabraClave) {
            arreglo.push (parseFloat(dato));
        }
    }
    while(dato.toLowerCase() !== palabraClave);
    return arreglo;
}

let arregloDeDatos= agregarDatosHastSalir();
console.log(":::Tus datos ingresados son::: ", arregloDeDatos );

