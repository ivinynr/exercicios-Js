function calculoCirculo(raio) {
    
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;

    return {
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    };
let raio = parseFloat(prompt("Digite o raio do círculo:"));
let resultado = calculoCirculo(raio);
}
console.log(`Área do círculo: ${resultado.area}`);
console.log(`Perímetro do círculo: ${resultado.perimetro}`);
