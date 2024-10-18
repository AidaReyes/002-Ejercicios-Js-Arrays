function estaVacio(arreglo) {
    return !arreglo.some(() => true);
}

const arreglo1 = [];
const arreglo2 = [1, 2, 3];

console.log(estaVacio(arreglo1)); 
console.log(estaVacio(arreglo2)); 
