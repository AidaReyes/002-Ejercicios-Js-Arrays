function Promedio(numeros) {
    if (numeros.length === 0) return null;
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length; 
}

const numeros = [7, 8, 9, 7, 10];
console.log(Promedio(numeros)); 

