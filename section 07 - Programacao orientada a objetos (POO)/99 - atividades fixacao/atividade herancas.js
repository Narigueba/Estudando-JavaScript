class Computador {
    constructor(nome, ram, armazenamento) {
        this.nome = nome;
        this.ram = ram;
        this.armazenamento = armazenamento;
        this.ligado = false;
        this.programasAbertos = [];
    };

    ligar() {
        if(this.ligado) {
            console.log('O Computador já está ligado');
            return
        };

        this.ligado = true;
    };

    desligar() {
        if(!this.ligado) {
            console.log('O computador ja está desligado');
            return
        };

        if(this.programasAbertos.length > 0) {
            console.log('Fechando todos os programas...');
            this.programasAbertos = [];
        }

        this.ligado = false;
    };


    abrirPrograma(programa) {
        if(!this.ligado) {
            console.log('É necessário que o computador esteja ligado para executar o programa')
            return
        }
        if(!programa) {
            console.log('Nenhum programa foi executado')
            return
        }

        if(this.programasAbertos.includes(programa)) {
            console.log(`${programa} ja está em execução`)
            return;
        }

        this.programasAbertos.push(programa);
        console.log(`Programas em execução: ${this.programasAbertos.join(', ')}`)
    };

    fecharPrograma(programa) {
        if(!this.ligado) {
            console.log('O computador está desligado');
            return;
        }
        
        const indice = this.programasAbertos.findIndex(programaAberto => programaAberto === programa)

        if(indice === -1) {
            console.log(`O programa ${programa} não está em execução`)
            return
        };

        const removido = this.programasAbertos.splice(indice, 1)[0];
        console.log(`${removido} foi encerrado com sucesso!`)

        if(this.programasAbertos.length > 0) {
                console.log(`Programas restantes: ${this.programasAbertos.join(', ')}`);
        } else {
            console.log('📂 Nenhum programa em execução');
        }
    };

    status() {
        console.log('\n📊 STATUS DO COMPUTADOR:');
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}GB`);
        console.log(`Armazenamento: ${this.armazenamento}GB`);
        console.log(`Estado: ${this.ligado ? 'Ligado' : 'Desligado'}`);

        if(this.programasAbertos.length > 0) {
             console.log(`Programas em execução: ${this.programasAbertos.join(', ')}`);
        } else {
            console.log('Nenhum programa em execução')
        }
    };
};

const computador = new Computador('Dell', 8, 256);

/*
console.log('=== TESTE 1: Ligar ===');
computador.ligar();

console.log('\n=== TESTE 2: Abrir programas ===');
computador.abrirPrograma('Chrome');
computador.abrirPrograma('VSCode');
computador.abrirPrograma('Spotify');

console.log('\n=== TESTE 3: Tentar abrir programa duplicado ===');
computador.abrirPrograma('Chrome');

console.log('\n=== TESTE 4: Status ===');
computador.status();

console.log('\n=== TESTE 5: Fechar programa ===');
computador.fecharPrograma('VSCode');

console.log('\n=== TESTE 6: Tentar fechar programa inexistente ===');
computador.fecharPrograma('Word');

console.log('\n=== TESTE 7: Status atualizado ===');
computador.status();

console.log('\n=== TESTE 8: Desligar (deve fechar todos programas) ===');
computador.desligar();

console.log('\n=== TESTE 9: Tentar abrir programa com PC desligado ===');
computador.abrirPrograma('Photoshop');

console.log('\n=== TESTE 10: Status final ===');
computador.status();

Testes Ok
*/

class Notebook extends Computador {
    constructor(nome, ram, armazenamento, bateria) {
        super(nome, ram, armazenamento);
        this.bateria = bateria;
    };

    ligar() {
        if(this.ligado) {
            console.log('O notebook ja está ligado')
            return;
        }

        if(this.bateria < 5) {
            console.log('Bateria insuficiente, carregue a bateria')
            return;
        }

        this.ligado = true;
        console.log('Notebook ligado.')
    };

    carregar(porcentagem) {
        if(typeof porcentagem !== 'number' || porcentagem <= 0) {
            console.log('Valor de carregar incorreto')
            return;
        }
        if(this.bateria >= 100) {
            console.log('Bateria está no máximo')
            return;
        }
        console.log(`Bateria atual: ${this.bateria}%`)
        console.log(`Carregando ${porcentagem}%...`);
    
        // SOMA a porcentagem (não substitui!)
        this.bateria += porcentagem;
    
        // Limita a 100%
        if(this.bateria > 100) {
            this.bateria = 100;
        }
    
        console.log(`Bateria atual: ${this.bateria}%`);

    }
};

/*
const notebook = new Notebook('Acer', 8, 256, 3);
notebook.ligar();
notebook.abrirPrograma('Chrome');
notebook.abrirPrograma('VSCode');
notebook.status();
notebook.carregar(80);
notebook.carregar(10);

Testes Ok
*/

class Desktop extends Computador {
    constructor(nome, ram, armazenamento, temMonitorExterno) {
        super(nome, ram, armazenamento);
        this.temMonitorExterno = temMonitorExterno;
        this.monitorLigado = false;
    }

    conectarMonitor() {
        if(!this.temMonitorExterno) return console.log('Este desktop não possui monitor externo');

        if(this.monitorLigado) return console.log('Monitor já está ligado e conectado');

        this.monitorLigado = true;
        console.log('Monitor externo conectado e ligado')
    };

    desconectarMonitor() {
        if(!this.temMonitorExterno) {
            console.log('Este desktop não possui monitor externo')
            return;
        }

        if(!this.monitorLigado) {
            console.log('Monitor já está desconectado');
            return;
        }

        this.monitorLigado = false;
        console.log('Monitor externo desconectado')
    }

    status() {
        super.status();
        
        if(this.temMonitorExterno) {
            const estado = this.monitorLigado ? 'Ligado' : 'Desligado';
            console.log(`Monitor Externo: ${estado}\n`);
        } else {
            console.log('Monitor Externo: Não disponível\n');
        }
    }
}