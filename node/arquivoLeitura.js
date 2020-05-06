const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//síncrono...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assíncrona...

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

//Lendo um arquivo.json especificamente
const config = require('./arquivo.json')
console.log(config.db)


//leitura do diretório atual

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})