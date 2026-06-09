const Taxas = {
    12: 0.0299, // 2,99%
    24: 0.0319, // 3,19%
    36: 0.0339, // 3,39%
    48: 0.0359, // 3,59%
    60: 0.0379, // 3,79%
};
const Prazos = [12, 24, 36, 48, 60];


function calcularFinanciamento(valorVeiculo, valorEntrada) {
    const valorFinanciado = valorEntrada > 0 ? valorVeiculo - valorEntrada : valorVeiculo;

    const resultado = Prazos.map(prazo => {
        const parcela = calcularParcela(valorFinanciado, prazo);
        return { prazo, parcela };
    });
    return resultado;
};
function calcularParcela(valorFinanciado, prazo) {
    const i = Taxas[prazo];

    const parcela = valorFinanciado * (i * Math.pow((1+i), prazo)) / (Math.pow((1+i), prazo) - 1) 
    return parcela;
};



module.exports = { calcularFinanciamento };