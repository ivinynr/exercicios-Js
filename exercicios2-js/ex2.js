let numerosP = 0;
let numerosI = 0;
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    
    if (numero % 2 === 0) {
        numerosP++;
    } else {
        numerosI++;
    }
}
console.log(`Números pares: ${numerosPares}`);
console.log(`Números ímpares: ${numerosImpares}`);
