function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (min - max) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return
        }
            resolve(msg.toUpperCase() + ' - Passei na Promise');    
        }, tempo);
    });
}

// Promise.all | Promise.race | Promise.resolve | Promise.reject

const promises = [
    espera('Promise 1', rand(1,5)),
    espera('Promise 2', rand(1,5)),
    espera('Promise 3', rand(1,5)),
    espera(1000, rand(1,5)),
];


/* Promise.all - resolve todas as promises
Promise.all(promises)
.then(valor => {
    console.log(valor)
}).catch(erro => {
    console.log(erro)
});
*/

// Promise.race - retorna a primeira promessa
/*
Promise.race(promises)
.then(valor => {
    console.log(valor)
}).catch(erro => {
    console.log(erro)
});
*/

// Promise.resolve - quando você ja possui o dado, sucesso imediato
/*
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return espera('Baixei a página', rand(1,5));
    }
}
*/

// Promise.reject - erro imediato
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache')
    } else {
        return espera('Baixei a página', rand(1,5));
    }
}

baixaPagina()
.then(dadosPagina => console.log(dadosPagina))
.catch(e => console.log('Erro:', e));