let populacaoA = 80000;
let populacaoB = 200000;
let taxaA = 0.03; 
let taxaB = 0.015; 
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    anos++;
}
console.log(`Anos necessários: ${anos}`);
