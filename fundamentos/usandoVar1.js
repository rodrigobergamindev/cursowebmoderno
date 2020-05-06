{
    {
        {
            {
                {
                    var x = "x"
                }
            }
        }
    }
}

console.log(x) // isso funciona


function teste() {
    var local = 'variável local' 
    //uma variável var, declarada dentro da função não será visivel globalmente
}

teste()
console.log(local) // erro