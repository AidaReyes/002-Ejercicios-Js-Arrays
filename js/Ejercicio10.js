function multiplicarPorDos(arreglo) {
    return arreglo.map(numero => numero * 2);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosMultiplicados = multiplicarPorDos(numeros);

console.log(numerosMultiplicados); 

