// mascara de numeros na digitação
function aplicarMascara(input) {
        input.addEventListener('blur', function() {

        let valor = this.value.replace(/\D/g, '');
        valor = (parseInt(valor) / 100).toFixed(2);

        if(valor === '') return;

        this.value = parseFloat(valor);
        
        this.value = valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    });
};

aplicarMascara(document.getElementById('valor-entrada'));
aplicarMascara(document.getElementById('valor-veiculo'));