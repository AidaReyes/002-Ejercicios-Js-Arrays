const objetos = [
    { nombre: "Alan", edad: 19 },
    { nombre: "Mani", edad: 20 },
    { nombre: "sebas", edad: 21 },
];

const propiedadBuscada = "edad";
const valorBuscado = 21;

const objetoEncontrado = objetos.find(objeto => objeto[propiedadBuscada] === valorBuscado);

console.log(objetoEncontrado); 
