const prompt = require("prompt-sync")();

function exibirMenu() {
  console.log("Escolha um programa:");
  console.log("1. Pratica 1");
  console.log("2. Pratica 2");
  console.log("3. Pratica 3");
  console.log("4. Pratica 4");
  console.log("0. Sair");
}

function executarPrograma(programa) {
  switch (programa) {
    case "1":
      require("./pratica1");
      break;
    case "2":
      require("./pratica2");
      break;
    case "3":
      require("./pratica3");
      break;
    case "4":
      require("./pratica4");
      break;
    case "0":
      console.clear();
      process.exit();
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }
}

function iniciar() {
  exibirMenu();

  const resposta = prompt("Digite o número do programa desejado: ");
  console.log();
  executarPrograma(resposta);
}

iniciar();
