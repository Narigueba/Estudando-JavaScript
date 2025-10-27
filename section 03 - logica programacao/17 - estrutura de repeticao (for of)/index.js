// For clássico - Utiliza com iteráveis (strings, arrays)
// For in - Retorna indice ou chave (strings, arrays e objetos)
// For of - Retorna o valor em si (arrays, strings)

const nome = 'Guilherme';
const nomes = ['Guilherme', 'Luiz', 'Igor', 'Dani']

for (let valor of nome) {
    console.log(valor)
}

console.log('------')

for (let valor of nomes) {
    console.log(valor)
}