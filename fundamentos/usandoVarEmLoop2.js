const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(() => console.log(i)) 
}

funcs[2]() //var não tem escopo de função, então ele utiliza o valor q o fez sair do loop, no caso 10
funcs[8]()