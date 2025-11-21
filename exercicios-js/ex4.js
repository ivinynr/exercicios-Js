//Desenvolva um programa que solicite  ao usuario varios numeros e realize a soma deles, imprima o resultado

quantidade_numeros= prompt("digite quantos numeros deseja adicionar: ");

soma=0;
for (let i =0;i<quantidade_numeros; i++){
    numero=parseFloat(prompt("digiteum numero: "))
    soma+=numero

}
console.log(" a soma dos numeros é:", soma)