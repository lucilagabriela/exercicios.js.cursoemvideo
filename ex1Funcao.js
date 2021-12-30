/* function parOuImpar(n) {
    if (n%2 == 0) {
        console.log(`O número ${n} é par.`)
    } else {
        console.log(`O número ${n} é ímpar.`)
    }
}
parOuImpar(2)
*/
function parOuImpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
let resultado = parOuImpar(2) // chamada. tem que ter, se não, não é executado
console.log(resultado)