/*Combina varios arreglos y ordena
Dado varios arreglos de números, combínalos todos en un solo arreglo y ordénalo de
menor a mayor. */

const arreglo1 = [5, 2, 9];
const arreglo2 = [1, 3, 4];
const arreglo3 = [8, 7, 6];

const combinado = [...arreglo1, ...arreglo2, ...arreglo3];

const ordenado = combinado.sort((a, b) => a - b);

console.log(ordenado); 

/*el sort te sirve para ordenar me lo dijo el profe coronita */
