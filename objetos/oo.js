//CÓDIGO NÃO EXECUTÁVEL

//Procedural -> variáveis podem ser compartilhadas de forma mais global na aplicação
procedimento(valor1,valor2,valor3)

//OO -> estruturas(classes ou funções) que geram objetos

objeto = { //o objeto funciona como uma cápsula que contém comportamentos(métodos ou funções) e atributos
    valor1,
    valor2,
    valor3,
    
    procedimento() {
        //...
    }
}

//Princípios importantes:
//1. Abstração -> pegar um objeto do mundo real e traduzir ele para que possa se encaixar dentro do seu sistema
//Ainda sobre abstração : Entender como abstrair um objeto do mundo real para que ele se adeque as necessidades do sistema
//2.Encapsulamento -> O objeto deve conter suas particularidades e mostrar a sua implementação apenas para quem precisa. ref: java, atributos públicos e privados, getters e setters para acesso destes atributos
//3. Herança -> Uma classe filha que herda características da classe pai, no javascripit herança é feita via prototype
//4. Polimorfismo