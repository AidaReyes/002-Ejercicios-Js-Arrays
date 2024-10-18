function calcularProducto(arreglo) {
    return arreglo.reduce((producto, numero) => producto * numero, 1);
}

let numeros = [1, 2, 3, 4, 5];
let resultado = calcularProducto(numeros);

console.log(resultado); 