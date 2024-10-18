function Valor(arreglo, valor) {
    return arreglo.includes(valor);
}

const numeros = [1, 2, 4, 6, 8];
const existe = Valor(numeros, 4);
const noExiste = Valor(numeros, 9);

console.log(existe); 
console.log(noExiste); 
