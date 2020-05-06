function Pessoa() {
    this.idade = 0 //criando a constante self, fixando o contexto de execução de this
    //para passar para a função setInterval

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa