const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(() => console.log(i)) 
}

funcs[2]()  // variável let tem escopo de função
funcs[8]()