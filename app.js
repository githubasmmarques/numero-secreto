let listaDeNumerosSorteados = [];
let limiteMaximo = 111;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Para economizar código, pode Trocar essas linhas por uma FUNÇÃO
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';             // Colocoa o texto dentro de <h1></h1>
//
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 60'  // Coloca o texto dentro de <p class="texto__paragrafo"></p>

function exibitTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
  exibitTextoNaTela('h1','Jogo do número secreto');
  exibitTextoNaTela('p' ,`Escolha um número entre 1 e ${limiteMaximo}`);
  // exibitTextoNaTela('h2','Teste de H2');
  // exibitTextoNaTela('h3','Teste de H3');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavravraTentativa = tentativas > 1? 'tentativas' : 'tentativa'; 
    console.log(chute + ' = ' + numeroSecreto + ' ? ');
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
      let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavravraTentativa} !!`;
      exibitTextoNaTela('h1','Acertou !!');
      exibitTextoNaTela('p',mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
      document.getElementById('chutar').setAttribute('disabled', true);
    } else {
      if (chute > numeroSecreto) {
        exibitTextoNaTela('p',`${tentativas}º chute --> O número é MENOR que ${chute}!`);
      } else {
        exibitTextoNaTela('p',`${tentativas}º chute --> O número é MAIOR que ${chute}!`);
      }
      tentativas++;
      limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteMaximo + 1);
    let quantElementosNaLista = listaDeNumerosSorteados.length;
    if (quantElementosNaLista == limiteMaximo) {
      listaDeNumerosSorteados= [];    // Limpa lista
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {  // Verifica se número está na lista
      return gerarNumeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido)           // Inclui o númeroEscolhido no final da lista
      // listaDeNumerosSorteados.pop();        // Excluio último elemento
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
    }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
  document.getElementById('chutar').removeAttribute('disabled');
}






// Exercicio Desafio 1
// 1) Criar uma função que exibe "Olá, mundo!" no console.
function exibirOla() {
  console.log("Olá, mundo!");
}
exibirOla();


// 2) Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}
exibirOlaNome("Regina Duarte");


// 3) Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
  return numero * 2;
}
let num = 31;
let resultadoDobro = calcularDobro(num);
console.log(`O dobro de ${num} é ${resultadoDobro}`);


// 4) Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}
let n1 = 12;
let n2 = 7;
let n3 = 9;
let media = calcularMedia(n1, n2, n3);
console.log(`A média de (${n1} + ${n2} + ${n3}) / 3 = ${media}`);


// 5) Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(a, b) {
  return a > b ? a : b;
}
let maiorNumero = encontrarMaior(n1, n2);
console.log(`O maior número entre ${n1} e ${n2} é ${maiorNumero}`);


// 6) Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado(numero) {
  return numero * numero;
}
let resultado = quadrado(n1);
console.log(`O quadrado de ${n1} é ${resultado}`);



// Exercicio 2
let nota1 = 6;
let nota2 = 6;
let nota3 = 2.999999999999998;
let nota4 = 5;
function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  return media;
}
function verificarAprovacao(media) {
  return media >= 5 ? "Aprovado" : "Reprovado";
}
console.log(`Nota1 = ${nota1}`);
console.log(`Nota2 = ${nota2}`);
console.log(`Nota3 = ${nota3}`);
console.log(`Nota4 = ${nota4}`);
let notaMedia =  calcularMedia(nota1, nota2, nota3, nota4);
console.log(`Média = ${notaMedia}`);
let situacao = verificarAprovacao(notaMedia);
console.log(`Situação = ${situacao}`);





// Exercicio Desafio 3
// 1) Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:
function calculaIMC(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}
let peso = 80;
let alturaMetros = 1.80;
let imc = calculaIMC(alturaMetros, peso);
console.log(`Peso=${peso} e Altura= ${alturaMetros} gera o IMC = ${imc}`);

// 2) Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}
// Exemplo de uso
let numero = 5;
let resultadoFat = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultadoFat}`);

// 3) Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.
function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}
// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// 4) Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}
// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);

// 5) Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}
// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);

// 6) Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
// Exemplo de uso
let numeroTabuada = 7;
mostrarTabuada(numeroTabuada);





// Exercicio 4 - ARRAY
// 1) Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

// 2) Crie uma lista de linguagens de programação chamada linguagensDeProgramacao.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3) Adicione à lista linguagensDeProgramacao os seguintes elementos: Java, Ruby e GoLang.
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
// Lista ao final: ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang']

// 4) Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[0]);

// 5) Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[1]);

// 6) Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[2]);