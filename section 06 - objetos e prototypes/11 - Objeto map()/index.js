const pessoas = [
    {id: 3, nome: 'Gui'},
    {id: 2, nome: 'Duda'},
    {id: 1, nome: 'Ana'},
];

// const novaPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novaPessoas[id] = { ...pessoa };
// }

const novaPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa
    novaPessoas.set(id, { ...pessoa });
}

for(const [identifier, { id, nome }] of novaPessoas) {
    console.log(identifier, id, nome)
}

console.log(novaPessoas)
novaPessoas.delete(2)
console.log(novaPessoas)