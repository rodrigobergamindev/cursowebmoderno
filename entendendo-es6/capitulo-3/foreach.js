//percorrendo um array utilizando forEach
//forEach é um laço de repetição que executa uma função anônima para item da lista
//esta função pode realizar qualquer coisa com a variável

let nomes = ['maria','josé','joão']

nomes.forEach((nome, i = 0) => {
    console.log(nome + ` posição ${i}`);
})

let	canais	=	["Globo",	"Sbt",	"Record"]
canais.forEach(function(canal) {
        canais.push("RedeTV");	//este item é ignorado no array
                                //laço forEach percorre o array no momento em que executa a função callback, elementos adicionados depois disso
                                //não aparecem no laço
		console.log(canal);
})

let notas = [6.1, 5.4, 9.9, 10, 7.8, 9.1, 9]

notas.forEach((nota) =>{
    console.log(nota)
})