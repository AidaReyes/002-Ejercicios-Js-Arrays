function cadenaaAPalabras(cadena) {
    return cadena.split(' ');
}

const texto = "Hola amigo, como estas?.";
const arregloDePalabras =cadenaaAPalabras(texto);

console.log(arregloDePalabras); 