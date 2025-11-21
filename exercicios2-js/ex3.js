let conjuntoNumeros = parseInt(prompt("Digite um número:"));
let menorValor = Number.MAX_VALUE; 
let maiorValor = Number.MIN_VALUE; 
let somaValores = 0;


for (let i = 0; i < conjuntoNumeros; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    
    if (numero < menorValor) {
        menorValor = numero;
    }
    if (numero > maiorValor) {
        maiorValor = numero;
    }
 somaValores += numero;
}
console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${somaValores}`);
