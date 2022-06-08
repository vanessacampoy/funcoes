//Funções
function imc(peso, altura) {
  const imc = peso / altura ** 2; //parâmetros
  return imc;
}
console.log(imc(65, 1.66)); //argumentos
console.log(imc(89, 2)); //argumentos


function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Voce gosta da natureza";
  } else {
    return "Você não tem uma cor favorita";
  }
}
console.log(corFavorita("verde"));


//Callback
function mostraConsole() {
  console.log("Olá!");
}
addEventListener("click", mostraConsole)


function maiorIdade(idade) {
  console.log(typeof idade);
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
  console.log(maiorIdade(23))


var vestidos = 45;
function quantidadeVestidos(vestidosFesta) {
  return `A loja possui ${vestidos - vestidosFesta} vestidos sem ser de festa`;
}
console.log(quantidadeVestidos(33))


//crie uma função que retorna o perímetro de um quadrado
function valor(lado) {
  return lado * 12;
}
console.log(valor(4))


//função para verificar se o valor é verdadeiro
function verdadeiro(dado) {
  return !!dado;
}
console.log(verdadeiro("dado"))


//função que retorna o nome completo
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Ana Carolina", "Andrade"))


//função que verifica se o número é par
function ePar(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(ePar(68));

//função que mostra o tipo de dado
function tipoDado(dado) {
  return typeof dado
}
console.log(tipoDado("blusa"))
console.log(tipoDado(23))


//função que mostra no console o nome completo
addEventListener("scroll", function() {
  console.log("Vanessa Campoy")
})


var totalPaises = 193

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}
precisoVisitar(56)