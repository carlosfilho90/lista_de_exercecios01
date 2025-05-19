//instalar o prompt-sync, rodar o arquivo com o node, no terminal, colocando o seguinte comando - node nomeDoArquivo.js, rodar o npm install para que as dependencias estejam corretamente instaladas e configuradas






//1-escreva um programa que recebe um número inteiro e verifica se ele é par ou impar
const prompt = require('prompt-sync')()

// function parOuImpar(num) {
//     if (num % 2 == 0) {
//         console.log(`O número ${num} é par`)
//     } else {
//         console.log(`O número ${num} é ímpar`)
//     }
// }
// let num = Number(prompt("digite um número : "))
// parOuImpar(num)





//2-crie um programa que classifica a idade de uma pessoa em categorias (crianças, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else


// function classificaIdade(idade) {
//     if (idade <= 14) {
//         console.log(`você tem ${idade} anos, logo você é criança!`)
//     } else if (idade >= 15 && idade <= 17) {
//         console.log(`você tem ${idade} anos, logo você é adolescente!`)
//     } else if (idade >= 18 && idade <= 55) {
//         console.log(`Você tem ${idade} anos, logo você é adulto!`)
//     } else {
//         console.log(`Você tem ${idade} anos, logo você é idoso!`)
//     }
// }
// let idade = Number(prompt("Digite sua idade: "))
// classificaIdade(idade)



//3 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// function classifica(nota){
//     if (nota<6){
//         console.log(`sua nota é ${nota}, você está reprovado !`)
//     }else if (nota>=7){
//         console.log(`Sua nota é ${nota}, você está aprovado !`)
//     }else{
//         console.log(`Sua nota é ${nota}, você está de recuperação!`)
//     }
// }

// let nota =  Number(prompt("Digite uma nota de 0 a 10: "))

// classifica(nota);


// 4- Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// function saudacao(hra) {
//     switch (hra) {
//         case "dia":
//             console.log("BOM DIA A TODOS DO GRUPO!")
//             break;
//         case "tarde":
//             console.log("BOA TARDE A TODOS DO GRUPO!")
//             break;
//         case "noite":
//             console.log("BOA NOITE A TODOS DO GRUPO!")
//             break;
//         default:
//             console.log("escolha errada, digite uma das três opções disponiveis!")
//     }
// }
// let hra = prompt("Escolha entre dia, tarde ou noite e receba uma saudação: ")
// saudacao(hra)



// 5- Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
// function calcularImc(peso,altura){
//     return peso/altura**2;
// }
// function avaliarImc(imc) {
//     let mensagem = ""
//     if (imc < 18.5) {
//         mensagem = " você está abaixo do peso !"
//     } else if (imc < 25){
//         mensagem = "você esta no peso ideal !"
//     }else if (imc>=25 && imc<30){
//         mensagem = " você está em sobrepeso, se cuide!"
//     }else {
//         mensagem = " você está em obesidade, se cuide!"
//     }
//         console.log(`Seu imc é de ${imc.toFixed(2)}, ${mensagem}`)
//     return imc;
// }
// let peso = Number(prompt("digite o seu peso: "))
// let altura = Number(prompt("digite a sua altura: "))
// let imc = calcularImc(peso,altura) 
// avaliarImc(imc)




// 6- Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// function tipoTriangulo(lado1, lado2, lado3) {
//     if (!(((lado1 + lado2) > lado3) && ((lado1 + lado3) > lado2) && (lado2+lado3)>lado1)) {
//         console.log("Esses valores não obedecem a lei de formação do triângulo")
//     }else if (lado1 === lado2 && lado1 === lado3) {
//         console.log("Este é um triângulo equilátero")
//     } else if (lado1 === lado2 || lado2===lado3 || lado3===lado1) {
//         console.log("Este é um triângulo isosceles")
//     } else {
//         console.log("Este é um triângulo escaleno")
//     }
// }

// let lado1 = Number(prompt("Digite o valor do Lado 1: "))
// let lado2 = Number(prompt("Digite o valor do Lado 2: "))
// let lado3 = Number(prompt("Digite o valor do Lado 3: "))

// tipoTriangulo(lado1, lado2, lado3);


// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// function valorMaca(qtde) {
//     let valor
//     if (qtde < 12) {
//         valor = qtde * 0.30
//         console.log(`O valor das ${qtde} maçãs é de R$${valor.toFixed(2)}!`)
//     } else {
//         valor = qtde * 0.25
//         console.log(`O valor das ${qtde} maçãs é de R$${valor.toFixed(2)}!`)
//     }
// }
// let qtde = Number(prompt("Digite a quantidade de maçãs compradas: "))

// valorMaca(qtde);

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.


// function cresc(valor1, valor2){
//     if(valor1>valor2){
//         console.log(`Ordem crescente : ${valor2}   ${valor1} `)
//     }else{
//         console.log(`Ordem crescente: ${valor1}    ${valor2}`)
//     }
// }

// let valor1 = Number(prompt("Digite o primeiro valor: "))
// let valor2 = Number(prompt("Digite o segundo valor: "))

// cresc(valor1,valor2 )


// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

// for(i=10; i>0;i--){
//     console.log(i);
// }


// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
// function repetir(num){
//     for(i=1; i<=10; i++){
//         console.log(`${i}-${num}`)
//     }
// }

// let num = prompt("Digite um número inteiro: ")

// repetir(num)


// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

// function somaDeNumeros() {
//     let soma = 0
//     for (let i = 0; i < 5; i++) {
//         let num = Number(prompt("digite um número: "))
//         soma +=num
//     }
//     console.log(`A soma de todos os números digitados é de : ${soma}`)
// }


// somaDeNumeros();

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

// function tabuada(num){
//     let res
//     for(let i= 1; i<11; i++){
//         res=num*i
//         console.log(`${i}°- ${num} X ${i} = ${res}`)
//     }
// }

// let num = Number(prompt("Digite o numero que vai ser multiplicado: "))

// tabuada(num)


// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

// function mediaAritmetica(num){
//     let media = 0
//     let count = 0
//     if(num===0){
//         console.log("Nenhum número valido foi digitado.")
//         return;
//     }
//     do{
//             media+=num
//             count++
//         num= Number(prompt("Digite outro número (ou digite 0 para sair): "))
//     }while(num!=0)
//             let res =media/count
//             console.log(`A média dos números digitados é de: ${res.toFixed(2)}`)
// }
// let num = Number(prompt("digite numeros decimais! ou digite 0 para sair!: "))

// mediaAritmetica(num)


// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.




// function fatorial(num) {
//     let soma = 1
//     if (num < 0) {
//         console.log("não existe fatorial de numeros negativos no conjunto dos inteiros")
//         return;
//     }
//         for (let i = 1; i < num + 1; i++) {
//             soma *= i
//         }
//     console.log(`O resultado do fatorial de ${num} é de ${soma}`)
// }
// let num = Number(prompt("digite um num para saber seu fatorial: "))
// fatorial(num);




// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// function fibonacci() {
//     let A=0
//     let B=1
//     let aux
//     let i = 0
//     console.log(A)
//     console.log(B)
//     do{
//         aux= A
//         A = B;
//         B=aux+B
//         console.log(B)
//         i++
//     }while(i<9)
// }
// fibonacci()
