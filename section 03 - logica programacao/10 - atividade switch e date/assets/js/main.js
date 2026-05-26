const h1 = document.querySelector('.container h1')

function getDataAtual() {
    const data = new Date();

    let diaSemana = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let mesNomes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let ano = data.getFullYear();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    switch(diaSemana) {
    case 0:
        diaSemana = 'Domingo'
        break
    case 1:
        diaSemana = 'Segunda-Feira'
        break
    case 2:
        diaSemana = 'Terça-Feira'
        break
    case 3:
        diaSemana = 'Quarta-Feira'
        break
    case 4:
        diaSemana = 'Quinta-Feira'
        break
    case 5:
        diaSemana = 'Sexta-Feira'
        break
    case 6:
        diaSemana = 'Sabado'
        break
    default:
        diaSemana = 'Erro do dia da semana'
    }

    return `${diaSemana}, ${dia} de ${mesNomes[mes]} de ${ano}, ${zeroAEsquerda(hora)}:${zeroAEsquerda(minuto)}`
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

h1.innerHTML = getDataAtual();