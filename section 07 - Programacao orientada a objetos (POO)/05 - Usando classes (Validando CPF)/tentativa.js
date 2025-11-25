class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            configurable: false,
            writable: false,
            value: cpfEnviado.replace(/\D+/g, ''),
        })
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCPF();

        return this.cpfLimpo === this.novoCPF;
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCPF() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial)
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1)

        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    static geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;
        for(let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica)
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
}

let cpf = new ValidaCPF('088.382.311-09');

if(cpf.valida()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}