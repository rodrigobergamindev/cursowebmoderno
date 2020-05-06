let alunos = [
    {nome: 'joão', idade: 21},
    {nome: 'maria', idade: 20},
    {nome: 'pedro', idade: 24}
]

let todosAlunosDeMaior = alunos.every((aluno) => aluno.idade > 18)

console.log(todosAlunosDeMaior)

//valida se todos os elementos do array atendem a condição e retorna um boolean