//método utilizado para filtrar um array com base em uma condição

let alunos = [
    {nome:'joão', idade:15},
    {nome:'josé', idade:18},
    {nome:'maria', idade:24 },
    {nome:'rodrigo', idade:12}
]

let alunosDeMaior = alunos.filter((aluno) => {
    return aluno.idade >= 18;
})

console.log(alunosDeMaior)