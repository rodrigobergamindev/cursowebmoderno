const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //cliente http q faz requisições de algo q está remoto




axios.get(url).then(response => {
    const funcionarios = response.data

    let chinesas = funcionarios.filter((funcionario) => {
        return funcionario.genero == 'F' && funcionario.pais == 'China'
    }).reduce((func, funcAtual) => {
        return funcAtual.salario > func.salario ? funcAtual : func
    })

    console.log(chinesas)
    
    /*let maiorSalario = chinesas[0].salario
    chinesas.forEach(chinesa => {
        if(chinesa.salario > maiorSalario){
            maiorSalario = chinesa.salario
        }
    });
    
    const chinesaComMaiorSalario = chinesas.find((chinesa) => chinesa.salario == maiorSalario)
    console.log(chinesaComMaiorSalario)*/
})

