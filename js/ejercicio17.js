/*Todos los números son mayores que "n"
Dado un arreglo de números y un número n, usa every() para verificar si todos los
números son mayores que n. */

const numeros = [12, 14, 15, 23, 30];
const n = 10;

const todosMayores = numeros.every(numero => numero > n);

console.log(todosMayores); 
