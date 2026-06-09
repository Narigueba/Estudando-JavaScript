const { calcularFinanciamento } = require('../models/CalculadoraModel');

exports.index = async (req, res) => {
    res.render('index',{ 
        resultado: null,
        valorEntrada: null,
        valorVeiculo: null,
        valorFinanciado: null,      
        erro: null });
};

function limparMoeda(valor) {
    return parseFloat(valor.replace(/\./g, '').replace(',', '.')) || 0;
}
exports.calcular = async (req, res) => {
    const valorVeiculo = limparMoeda(req.body.valorVeiculo);
    const valorEntrada = limparMoeda(req.body.valorEntrada) || 0;
    const valorFinanciado = valorEntrada > 0 ? valorVeiculo - valorEntrada : valorVeiculo;
    const resultado = calcularFinanciamento(valorVeiculo, valorEntrada);
    res.render('index', { 
        resultado,
        valorEntrada,
        valorVeiculo,
        valorFinanciado,
        erro: null });
}

