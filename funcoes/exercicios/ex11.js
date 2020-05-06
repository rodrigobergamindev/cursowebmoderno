const verificarAnoBissexto = (ano) => {
    if( ano % 4 == 0 && ano % 100 !== 0) {
        return `O ano de ${ano} é bissexto`
    }else if( ano % 4 !== 0 && ano % 400 == 0){
        return `O ano de ${ano} é bissexto`
    }else{
       return `O ano de ${ano} não é bissexto`
    }
}

console.log(verificarAnoBissexto(2016))