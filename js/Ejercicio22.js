const valores = [0, 1, '', null, undefined, 'Hola', false, 42, NaN];

const valoresVerdaderos = valores.filter(valor => Boolean(valor));

console.log(valoresVerdaderos); 
