const nome = 'Guilherme';
const sobrenome = 'Miranda';
const idade = 21;
const peso = 65;
const alturaEmMetros = 1.78;
let indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmMetros}m de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);