function palabrasCN(arreglo, n) {
    return arreglo.filter(palabra => palabra.length > n);
}

const palabras = ["desconocido", "uvas", "chocolate", "Creapas", "uno"];
const n = 4;
const resultado = palabrasCN(palabras, n);

console.log(resultado); 

