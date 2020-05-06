//iterador é aquele que irá iterar (um loop for por exemplo)
//iterável é aquele que pode ser iterado por um iterador, como um array ou objeto
//Um objeto iterável está ligado diretamente com um iterador que define como este objeto será percorrido na prática

let bruxos = ['Harry Potter', 'Hermione', 'Rony Weasley'] //iterável no caso um array

let iterador = bruxos[Symbol.iterator](); //definindo o iterador da propriedade Symbol.iterator

console.log(iterador.next(), iterador.next(), iterador.next()) //função next retornará um objeto com dois valores, um correspondente ao valor extraído e o outro um booleano


//na prática esta estrutura de iteração é sempre feita pelo laço de repetição for...of e geradores