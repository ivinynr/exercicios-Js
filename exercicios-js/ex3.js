let nota=[];
for (let i = 1; i < 4; i++) {
    nota.push(parseFloat(prompt(`Digite a nota ${i + 1}: `)));
}
let media = (nota[1] + nota[2] + nota[3]) / 3;


if (media <= 4) {
    console.log(`Média: ${media}. Aluno reprovado.`);
} else if (media < 7) {
    let notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação: "));
    let mediaRecuperacao = (media + notaRecuperacao) / 2;

    if (mediaRecuperacao >= 5) {
        console.log(`Média após recuperação: ${mediaRecuperacao}. Aluno aprovado.`);
    } else {
        console.log(`Média após recuperação: ${mediaRecuperacao}. Aluno reprovado.`);
    }
} else {
    console.log(`Média: ${media}. Aluno aprovado.`);
}
