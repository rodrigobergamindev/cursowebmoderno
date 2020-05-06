const triangule = (a,b,c) => {
    if(a == b && a == c && b == c){
        console.log('Este é um triângulo equilátero')
    }
    else if(a == b || b == c || a == c){
        console.log('Este é um triângulo isósceles')
    }
    else{
        console.log('Este é um triângulo escaleno')
    }
}

triangule(2,2,2)