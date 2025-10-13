// const data = new Date(1979, 9, 3, 15, 14, 12); // A, M, d, h, m, s, ms;
// console.log(data.toString())

// const data2 = new Date('2019-04-20 20:20:30'); // A, M, d, h, m, s, ms;
// console.log(data2.toString())

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Dia Semana', data.getDay());


function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+ 1) ;
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

const data = new Date();
formataData(data)

const dataBrasil = formataData(data);
console.log(dataBrasil)