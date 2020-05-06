function Carro(velocidadeMaxima = 200, delta = 5) { //Função construtora que poderá instanciar outros objetos, ela funciona como uma classe
    //atributo privado
    let velocidadeAtual = 0

    //método público
    this.acelerar = function(){
        if(velocidadeAtual + delta < velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro //pode passar o construtor com ou sem parênteses
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(340, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())