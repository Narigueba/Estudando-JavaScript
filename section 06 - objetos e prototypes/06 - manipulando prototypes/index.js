// new Object -> Object.prototype
const objetoA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objetoB = {
    chaveB: 'B'
    // __proto__: objetoA
};
Object.setPrototypeOf(objetoB, objetoA);
console.log(objetoB.chaveA)
// Agora é possivel acessar o __proto__ de objetoA pelo objetoB


const objetoC = new Object();
objetoC.chaveC = 'C';
Object.setPrototypeOf(objetoC, objetoB);
console.log(objetoB.chaveB)
// Agora é possivel acessar o __proto__ de objetoA pelo objetoC, pois ele se linka ao objetoB que está sucessivamente linkado ao objetoA
