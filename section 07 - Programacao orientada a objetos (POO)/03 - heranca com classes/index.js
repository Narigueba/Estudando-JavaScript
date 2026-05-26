class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`)
            return;
        }

        this.ligado = true;
    }
        desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
} 

const celular = new Smartphone('Iphone', 'Preto', 'XR')
console.log(celular)
celular.ligar()
console.log(celular.ligado)

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Método ligar alterado')
    }
}

const tablet = new Tablet('Samsung', 'Sim');
tablet.ligar();