let varA = 'a'; // b
let varB = 'b'; // c
let varC = 'c'; // a
const tempA = varA;

varA = varB;
varB = varC;
varC = tempA;

console.log(`${varA}, ${varB}, ${varC}`);