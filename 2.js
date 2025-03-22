//A função prompt() não está disponível no Node.js, então você pode usar o módulo prompt-sync para obter a mesma funcionalidade.
//Para instalar o prompt-sync, execute o seguinte comando no terminal:
//npm install prompt-sync

//Agora você pode importar o prompt-sync para o seu arquivo JavaScript.
const prompt = require('prompt-sync')({sigint: true});
//Agora é possível usar o prompt-sync para obter o nome do usuário.
const nome = prompt("Qual o seu nome?");
//Agora é possível usar o prompt-sync para obter a idade do usuário.
const idade = prompt("Qual a sua idade?");
//Agora é possível usar o prompt-sync para obter a linguagem de programação que o usuário está estudando.
const linguagem = prompt("Qual linguagem de programação você está estudando?");
//Imprime uma mensagem de boas-vindas com o nome, idade e linguagem de programação do usuário.
console.log(`Olá, ${nome}! Você tem ${idade} anos e já está aprendendo ${linguagem}!`);
//Agora é possível usar o prompt-sync para obter a resposta do usuário.
const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para sim e 2 para não.`);
if (resposta == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
}
else if (resposta == 2) {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
}