const eqSegundoGrau = (a,b,c) => {
    const x = []
    const delta = (b**2)-4*a*c
        if(delta < 0){
            return `A equação não possuí resultados reais`
        }
        else if(delta === 0){
            const x1 = (-b)/2*a
            x.push(x1)
        }else{
            const x1 = (-b + Math.sqrt(delta))/2*a
            const x2 = (-b - Math.sqrt(delta))/2*a
            x.push(x1, x2)
        }
        return x
}

//x1 será sempre o primeiro elemento do array e x2 o segundo elemento
console.log(eqSegundoGrau(1,-10,25)) //delta = 0
console.log(eqSegundoGrau(1,-5,6)) //delta > 0
console.log(eqSegundoGrau(5, -3, 1)) //delta < 0