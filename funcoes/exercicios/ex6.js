const montanteJC = (capital, taxa, tempo) => `R$ ${capital*((1 + taxa)**tempo).toFixed(2)}` //Montante com juros composto
const montanteJS = (capital, taxa, tempo) => `R$ ${(capital*taxa*tempo).toFixed(2)}` //Montante com juros simples

console.log(montanteJC(2000, 0.10, 4))
console.log(montanteJS(2000, 0.10, 4))