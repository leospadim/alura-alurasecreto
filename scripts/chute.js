const eChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());

function onSpeak(e){
    const chute = e.results[0][0].transcript.replace('.', '');
    exibeChute(chute);
    testaChute(chute);
}

function exibeChute(chute){
    eChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}

function testaChute(chute){
    const numero = + chute;

    if(notNumber(numero)){
        eChute.innerHTML += '<div>Valor inválido</div>'
        return;
    }
    if(outOfRange(numero)){
        eChute.innerHTML += `
            <div>Valor inválido: o número precisa estar entre ${menor} e ${maior}</div>
        `
        return;
    }

    if(numero === sorteio) {
        document.body.innerHTML += `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${sorteio}.</h3>

            <button id="replay" class="btn-replay">Jogar novamente?</button>
        `
    }else if(numero > sorteio){
        eChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div>
        `
    }else{
        eChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div>
        `
    }
}

function notNumber(numero) {
    return Number.isNaN(numero);
}
function outOfRange(numero){
    return numero > maior || numero < menor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'replay'){
        window.location.reload();
    }
});
