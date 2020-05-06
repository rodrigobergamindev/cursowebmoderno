let bruxos = []

function Bruxo(nome, qi, nivelMagia){
    this.nome = nome
    this.qi = qi
    this.nivelMagia = nivelMagia
    this.casa;
    
    this.setNivelMagia = (nivelMagia) => {
        if(nivelMagia > 10){
            this.nivelMagia = 10
        }else{
            this.nivelMagia = nivelMagia
        }
    }
}

const chapeuSeletor = {
    fazerSelecaoBruxo(bruxo) {
        if (bruxo.qi > 200 && bruxo.nivelMagia > 5) {
            return bruxo.casa = 'Griffinoria'
        }else if (bruxo.qi > 400 && bruxo.nivelMagia > 6) {
            return bruxo.casa = 'Sonserina'
        }else{
            return bruxo.casa = 'Lufa-Lufa'
        }
    }
}


const bruxo1 = new Bruxo('Harry Potter', 400, 10)
const bruxo2 = new Bruxo('Hermione',500, 6)
const bruxo3 = new Bruxo('Snaipe', 700, 10)
const bruxo4 = new Bruxo('Roney', 100, 4)

bruxos.push(bruxo1, bruxo2, bruxo3, bruxo4)
console.log(chapeuSeletor.fazerSelecaoBruxo(bruxo4))
console.log(bruxos)
