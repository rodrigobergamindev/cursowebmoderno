//Percorre todos os valores do array e condensa em um único valor

let numeros = [1,2,3,4,5,6]
let soma = 1;
soma = numeros.reduce((soma, numero) => soma * numero); //calculando fatorial de 6

console.log(soma);

let alunos = [
    {nome: 'joao', idade: 10},
    {nome: 'josé', idade: 20},
    {nome: 'marcos', idade: 22}
];

let nomes = alunos.reduce((arrayDeNomes, aluno) => {
    arrayDeNomes.push(aluno.nome);
    return arrayDeNomes;
}, []);

console.log(nomes)
