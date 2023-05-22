AOS.init();

const dataDoEvento = new Date("Jun 12, 2023 19:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaASHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24
    const horaEmMS = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaASHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    } 
}, 1000);