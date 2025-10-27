// try{
//     // executado quando não há erros
//     console.log('Abri um arquivo');
//     console.log('Ocorreu um erro');
//     console.log(a);
// }catch(e){
//     // executado quando há erros
//     console.log('Tratando o erro');

// } finally {
//     // sempre executado
//     console.log('Sempre serei executado: Finally')
// }

function retornaHora(data){
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.')
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    })
}

try{
    const data = new Date('01-01-1970 12:06:58')
    const hora = retornaHora(data);
    console.log(hora)
}catch(e){
    //Tratar erro
}finally {
    console.log('Tenha um bom dia!')
}


