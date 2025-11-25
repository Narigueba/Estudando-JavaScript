function espera(msg, tempo) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'))
        
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

espera('Conexão com o banco', rand(1, 5))
.then(resposta => {
    console.log(resposta);
    return espera('Buscando dados', rand(1, 4))
    .then(resposta => {
        console.log(resposta);
        return espera(1, rand(1, 3))
        .then(resposta => {
            console.log(resposta)
        }).then(() => {
            console.log('Exibindo os dados do banco.')
        })
        .catch(e => {
            console.log('Erro:' ,e)
        })
    });
})
.catch();

