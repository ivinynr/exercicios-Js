//media ponderada

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;
let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);
