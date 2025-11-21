function calculoMontante(capitalInicial, taxaJuros, tempoMeses){
    taxaJurosDecimal = taxaJuros / 100;

    let montante = capitalInicial * Math.pow((1 + taxaJurosDecimal), tempoMeses);
    montante = montante.toFixed(2);
    return montante;
}
let capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (em percentual):"));
let tempoMeses = parseInt(prompt("Digite o tempo do investimento (em meses):"));

// Chamando a função e exibindo o resultado
let resultadoMontante = calculoMontante(capitalInicial, taxaJuros, tempoMeses);
console.log(`O montante do investimento é: R$ ${resultadoMontante}`);
