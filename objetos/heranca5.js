function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('NodeJS',123)
const aula2 = new Aula('Spring Boot', 456)

console.log(aula1, aula2)