const divisao = (dividendo,divisor) => {
    const resultado = dividendo/divisor;
    const resto = dividendo%divisor;
    return `resultado = ${resultado}, resto = ${resto}`
}

console.log(divisao(12,3))