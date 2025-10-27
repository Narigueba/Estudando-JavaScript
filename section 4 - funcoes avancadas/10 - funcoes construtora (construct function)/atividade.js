function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.pressionaEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            let conta = eval(this.display.value);
            
            if(conta === NaN) return alert('Conta inválida');

            this.display.value = conta;

        }catch(e) {
            alert('Conta invalida')
            return
        };
    };

    this.pressionaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
            return;
        });
    };
};

const calculadora = new Calculadora();
calculadora.inicia();





// function Calculadora() {
//     this.display = document.querySelector('.display');

//     this.inicia = function() {
//         this.cliqueBotao();
//     };

//     this.cliqueBotao = function() {
//         document.addEventListener('click', e => {
//             const el = e.target;
            
//             if(el.classList.contains('btn-num')) {
//                 btnDisplay(el.innerText);
//             };

//             if(el.classList.contains('btn-clear')) {
//                 this.clearDisplay();
//             };




//         });
//     };

//     this.clearDisplay = function() {
//         this.display.value = '';
//     };

//     this.btnDisplay = function(valor) {
//         this.display.value += valor;
//     }
// }

// const calculadora = new Calculadora();
// calculadora.inicia();