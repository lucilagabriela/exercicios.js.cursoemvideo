let filmes = ['Matrix 1', 'Matrix 2', 'Matrix 3']
/*console.log(filmes)
console.log(filmes.length)
*/

/*
for (let posicao=0;posicao<filmes.length;posicao++) {
    console.log(filmes[posicao])
}
*/

for (let posicao in filmes) { // + recomendado
    console.log(filmes[posicao])
}