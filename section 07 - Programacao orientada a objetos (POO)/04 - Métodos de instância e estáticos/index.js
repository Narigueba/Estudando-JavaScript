class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Pilha trocada')
    }
}

const controle1 = new ControleRemoto('Samsung')

controle1.aumentarVolume();
console.log(controle1)
ControleRemoto.trocaPilha();