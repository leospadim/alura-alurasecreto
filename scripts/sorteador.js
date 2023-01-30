const menor = 0;
const maior = 500;
const sorteio = gerarNumero();

const eMenor = document.getElementById('menor-valor'); eMenor.innerHTML = menor;
const eMaior = document.getElementById('maior-valor'); eMaior.innerHTML = maior;

function gerarNumero(){
    return parseInt(Math.random() * (menor - maior) + maior + 1);
}
console.log('Número gerado: ' + sorteio);
