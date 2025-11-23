const timer = document.getElementById("timer")
const frase = document.getElementById("frase")

const frases = [
    "Sempre fomos bons de conversar - Mais Ninguém, Banda Do Mar",
    "Se for preciso, eu pego um barco, eu remo por seis meses, como peixe pra te ver - Partilhar, Rubel",
    "Eu quero partilhar a vida boa com você - Partilhar, Rubel",
    "Tudo em volta tem me confirmado, bebê, que eu e você, somos coisa de alma - BB, Tim Bernardes",
    "Quero amar e sempre ver de perto você - BB, Tim Bernardes",
    "Teu poder funciona muito bem em minha pessoa - Lana, Kamaitachi",
    "Teus colares brilham, mas não brilham mais que teu sorriso - Lana, Kamaitachi",
    "Você é muito má, mas eu até que aturo - Lana, Kamaitachi",
    "Só o teu olhar, faz a terra girar ao contrario - Super Heroína, Kamaitachi",
    "E que no fundo meu coração quer dizer, é que eu te amo demais - Dizeres, Orgânico",
    "E tudo que eu faço, me lembra você - Dizeres, Orgânico",
    "Sorriremos quando acordar e antes de dormir - Dizeres, Orgânico",
    "Esse amor que existe em nós pode salvar o mundo - Saturno, Bin",
    "E se eu te ver passando, amor, eu taco um beijo - Saturno, Bin",
    "Até o programa mais chato aos domingo eu assisto rindo se tenho você no meu colchão - Saturno, Bin",
    "De todos os loucos do mundo, eu quis você - De Todos Os Loucos Do Mundo, Clarice Falcão",
    "Você me capturou, Seu jeito me cativou - Papoulas, Yago Oproprio",
    "De manhã, de madrugada, te quero também de tarde - Imprevisto, Yago Oproprio",
    "Como é bom te olhar nos olhos - Planos, BK",
    "Eu amo o jeito que você se veste - Planos, Bk",
    "Linda preciso te ver, te amar, te sentir, branca eu amo você - Vem cá, Altamira",
    "Faz assim sou teu homem, e tu é minha mulher - Vem cá, Altamira",
    "Meu bem, quero ser seu namorado - Várias queixas, Gilsons"
]


function calcularTempo(data) {
    const agora = new Date();
    const diferenca = agora - data; // Diferença em milissegundos

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

function randomizarFrase() {
    const index = Math.floor(Math.random() * frases.length);
    const frase = frases[index];
    return frase;
}

function randomizarFoto(numero) {
    const numeroAleatorio = Math.floor(Math.random() * numero) + 1;
    return `./src/img/${numeroAleatorio}.jpg`
}

const data = new Date("2025-02-10T21:24:00")

// setInterval(() => {
//     timer.innerHTML = calcularTempo(data);
// }, 1000);

setInterval(() => {
    document.getElementById("foto").src = randomizarFoto(4);
    frase.innerHTML = randomizarFrase();
}, 5000);

