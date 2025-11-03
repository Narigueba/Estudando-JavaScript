function Pessoa(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;

    this.calcularImc = () => {
        let imc = this.peso / Math.pow(this.altura, 2)

        if (imc >= 30) return `Obesidade, seu imc é ${imc.toFixed(2)}`
        if (imc >= 25) return `Sobrepeso, seu imc é ${imc.toFixed(2)}`
        if (imc >= 18.5) return `Peso normal, seu imc é ${imc.toFixed(2)}`
        return `Abaixo do peso, seu imc é ${imc.toFixed(2)}`
    }
}

const pessoa1 = new Pessoa('Guilherme', 65, 1.75);

console.log(pessoa1.calcularImc())

