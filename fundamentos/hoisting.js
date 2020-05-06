/*console.log('a = ', a)
var a = 2 //variável foi declarada depois, mas foi jogada para cima
console.log('a = ', a)
*/
// exemplo claro do que aconteceu acima:

var a
console.log('a = ', a)
var a = 2 // o hoisting não ocorre com a variável do tipo let
console.log('a = ', a)