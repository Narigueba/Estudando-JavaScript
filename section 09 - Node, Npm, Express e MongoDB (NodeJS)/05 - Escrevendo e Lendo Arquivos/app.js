const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Guilherme'},
//     {nome: 'Maria'},
//     {nome: 'Ana'},
//     {nome: 'José'},
// ];
// const json = JSON.stringify(pessoas, '', 2)
//escrever(caminhoArquivo, json);

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

lerArquivo(caminhoArquivo)