 arreglo1 = [
    { nombre: "Alambrito", edad: 19 },
    { nombre: "Manuel", edad: 20 }
];

const arreglo2 = [
    { apellido: "Palafox" },
    { apellido: "Tlacuapa" }
];

const combinar = arreglo1.map((objeto, index) => {
    return { ...objeto, ...arreglo2[index] };
});

console.log(combinar);