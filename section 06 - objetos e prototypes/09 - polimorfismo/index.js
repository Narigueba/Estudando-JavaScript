// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo  ) {
        console.log(`Saldo insuficiente: R$${this.saldo}`)
        return;
    }

    console.log(`Saldo sacado`)
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    console.log(`Saldo depositado`);
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag./c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
};

const conta1 = new Conta(01, 21, 1000);
// conta1.depositar(10);
// conta1.sacar(1000);
// conta1.verSaldo();
// conta1.sacar(1000);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo}`)
        return;
    }

    console.log(`Saldo sacado`)
    this.saldo -= valor;
    this.verSaldo();
};

const contaCorrente = new ContaCorrente(02, 01, 0, 100);
// contaCorrente.depositar(10);
// contaCorrente.sacar(110);

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
};

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(03, 22, 0);
contaPoupanca.depositar(10);
contaPoupanca.sacar(110);
contaPoupanca.sacar(1);
