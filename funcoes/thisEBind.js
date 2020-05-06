const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//o this varia de acordo com o contexto de execução em que é chamado
//função bind amarra o contexto de execução do this para que não cause erros