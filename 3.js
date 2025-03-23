//A função prompt() não está disponível no Node.js, então você pode usar o módulo prompt-sync para obter a mesma funcionalidade.
//Para instalar o prompt-sync, execute o seguinte comando no terminal:
//npm install prompt-sync

//Agora você pode importar o prompt-sync para o seu arquivo JavaScript.
const prompt = require('prompt-sync')({sigint: true});

let descricaoLinguagem = new Map();
descricaoLinguagem.set("JavaScript", "uma linguagem de programação popular para desenvolvimento web.");
descricaoLinguagem.set("Python", "uma linguagem de programação popular para ciência de dados e automação.");
descricaoLinguagem.set("Java", "uma linguagem de programação popular para desenvolvimento de aplicativos.");
descricaoLinguagem.set("C++", "uma linguagem de programação popular para desenvolvimento de jogos e sistemas embarcados.");
descricaoLinguagem.set("C#", "uma linguagem de programação popular para desenvolvimento de aplicativos Windows.");
descricaoLinguagem.set("PHP", "uma linguagem de programação popular para desenvolvimento web.");
descricaoLinguagem.set("Ruby", "uma linguagem de programação popular para desenvolvimento web.");
descricaoLinguagem.set("Swift", "uma linguagem de programação popular para desenvolvimento de aplicativos iOS.");
descricaoLinguagem.set("Kotlin", "uma linguagem de programação popular para desenvolvimento de aplicativos Android.");
descricaoLinguagem.set("TypeScript", "uma linguagem de programação popular para desenvolvimento web.");
descricaoLinguagem.set("Go", "uma linguagem de programação popular para desenvolvimento de sistemas.");
descricaoLinguagem.set("Rust", "uma linguagem de programação popular para desenvolvimento de sistemas.");
descricaoLinguagem.set("Scala", "uma linguagem de programação popular para desenvolvimento de sistemas.");
descricaoLinguagem.set("Perl", "uma linguagem de programação popular para automação e processamento de texto.");
descricaoLinguagem.set("Lua", "uma linguagem de programação popular para desenvolvimento de jogos e automação.");
descricaoLinguagem.set("R", "uma linguagem de programação popular para análise de dados e estatística.");
descricaoLinguagem.set("Objective-C", "uma linguagem de programação popular para desenvolvimento de aplicativos iOS.");
descricaoLinguagem.set("Shell", "uma linguagem de programação popular para automação de tarefas no sistema operacional.");
descricaoLinguagem.set("Cobol", "uma linguagem de programação popular para processamento de dados em mainframes.");
descricaoLinguagem.set("Ada", "uma linguagem de programação popular para sistemas críticos de segurança.");
descricaoLinguagem.set("Haskell", "uma linguagem de programação popular para programação funcional.");
descricaoLinguagem.set("Lisp", "uma linguagem de programação popular para inteligência artificial e processamento de listas.");
descricaoLinguagem.set("Prolog", "uma linguagem de programação popular para programação lógica.");
descricaoLinguagem.set("SQL", "uma linguagem de programação popular para manipulação de bancos de dados.");
descricaoLinguagem.set("Pascal", "uma linguagem de programação popular para ensino de programação.");
descricaoLinguagem.set("Assembly", "uma linguagem de programação popular para programação de baixo nível.");

let escolhaFormacao = prompt("Você está estudando para ser um desenvolvedor Front-end ou Back-end? Selecione 1 para Front-end e 2 para Back-end: ");
if (escolhaFormacao == 1) {
    console.log("Você está estudando para ser um desenvolvedor Front-end.");
    console.log("Você gostaria de aprender React ou Vue?");
    let escolhaFrameworkFrontEnd = prompt("Selecione 1 para React e 2 para Vue: ");
    if (escolhaFrameworkFrontEnd == 1) {
        console.log("Você está estudando React, uma biblioteca JavaScript popular para desenvolvimento web.");
    } else if (escolhaFrameworkFrontEnd == 2) {
        console.log("Você está estudando Vue, um framework JavaScript popular para desenvolvimento web.");
    }
} else if (escolhaFormacao == 2) {
    console.log("Você está estudando para ser um desenvolvedor Back-end.");
    console.log("Você gostaria de aprender C# ou Java?");
    let escolhaFrameworkBackEnd = prompt("Selecione 1 para C# e 2 para Java: ");
    if (escolhaFrameworkBackEnd == 1) {
        console.log("Você está estudando C#, uma linguagem de programação popular para desenvolvimento de aplicativos Windows.");
    } else if (escolhaFrameworkBackEnd == 2) {      
        console.log("Você está estudando Java, uma linguagem de programação popular para desenvolvimento de aplicativos.");
    }
}
let listaTecnologias = [];
let escolhaTecnologia = prompt("Quais as tecnologias que você gostaria de se especializar?");
while (escolhaTecnologia != "sair") {
    console.log("");
    listaTecnologias.push(escolhaTecnologia);
    if (descricaoLinguagem.has(escolhaTecnologia)) {
        console.log(`Muito bom você querer se especializar em ${escolhaTecnologia}! ${escolhaTecnologia} é ${descricaoLinguagem.get(escolhaTecnologia)}`);
    } else {
        console.log(`Muito bom você querer se especializar em ${escolhaTecnologia}! Infelizmente, não tenho informações sobre essa tecnologia no meu banco de dados no momento.`);
    }
    escolhaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sair' para finalizar.");
}