function obtenerIndice(arreglo, valor) {
    return arreglo.indexOf(valor);
}

const numeros = [10, 20, 30, 40, 50];
const indice1 = obtenerIndice(numeros, 30);
const indice2 = obtenerIndice(numeros, 60);

console.log(indice1); 
console.log(indice2);
