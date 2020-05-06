let numeros = [1,2,3,4,5]

for(let numero of numeros) {
    if(numero > 3) {
        break; // interrompe execução do loop
    }
    console.log(numero);
}

for(let numero of numeros) {
    if(numero == 2){
        continue; //Pula essa parte da execução, quando numero == 2
    }
    console.log(numero)
}

