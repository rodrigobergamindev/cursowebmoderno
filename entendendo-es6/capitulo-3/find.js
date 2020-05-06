//Percorre um array e encontra o primeiro elemento passado
let alunos = [
    {nome:'joão', idade:15},
    {nome:'josé', idade:18},
    {nome:'maria', idade:24 },
    {nome:'rodrigo', idade:12}
]

var aluno = alunos.find((aluno) => {
    return aluno.nome === 'rodrigo';
    //caso existissem dois alunos com o nome "Rodrigo", teria retornado apenas o primeiro
})

console.log(aluno)