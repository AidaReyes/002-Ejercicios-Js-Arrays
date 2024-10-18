let valores = [1, 2, 3, 1, 4, 1, 5, 6];
let valorBuscado = 4;

const conteo = valores.reduce((acumulador, valor) => {
    return valor === valorBuscado ? acumulador + 1 : acumulador;
}, 0);

console.log(conteo); 
