const personas = [
    { nombre: "Alancito", edad: 19 },
    { nombre: "Manuel", edad: 25 },
    { nombre: "Jose", edad: 21 },
    { nombre: "Omar", edad: 30},
];

const agrupadas = personas.reduce((acumulador, persona) => {
    const decada = `${Math.floor(persona.edad / 10) * 10}s`;
    if (!acumulador[decada]) {
        acumulador[decada] = [];
    }
    acumulador[decada].push(persona);
    return acumulador;
}, {});

console.log(agrupadas);
