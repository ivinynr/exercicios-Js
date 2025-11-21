let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let ano = 1996;
let aumentoPercentual = 1.5; 

for (ano = 1996; ano <= 2022; ano++) {
    salarioInicial += salarioInicial * (aumentoPercentual / 100);
    aumentoPercentual *= 2; 
}
console.log(`O salário atual do funcionário é: R$ ${salarioInicial.toFixed(2)}`);

