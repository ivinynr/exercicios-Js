let altura = [];
let totalAlturaHomem = 0;
let numeroHomens = 0;
let numeroMulheres = 0;


for (let i = 0; i < 15; i++) {
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} em centímetros:`));
    let genero = prompt(`Digite o gênero da pessoa (H para homem, M para mulher):`).toUpperCase();
    

if (genero === 'H') {
        totalAlturaHomem += altura;
        numeroHomens++;
    } else if (genero === 'M') {
        numeroMulheres++;
    }

    altura.push(altura);
}
let maiorAltura = Math.max(...altura);
let menorAltura = Math.min(...altura);
let mediaAlturaHomens = totalAlturaHomem / numeroHomens;


console.log(`Maior altura do grupo: ${maiorAltura} centímetros`);
console.log(`Menor altura do grupo: ${menorAltura} centímetros`);
console.log(`Média de altura dos homens: ${mediaAlturaHomens.toFixed(2)} centímetros`);
console.log(`Número de mulheres: ${numeroMulheres}`);
