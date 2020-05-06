function tratarErroELancar(erro){
    throw new Error("Não foi possível processar a operação :(")
}

function imprimirNome(obj) {
    try {
        console.log(obj.nome.toUpperCase() + "!!!")
    } catch (error) {
        tratarErroELancar(error)
    }
}

const obj = { name: 'Rodrigo'}

imprimirNome(obj)