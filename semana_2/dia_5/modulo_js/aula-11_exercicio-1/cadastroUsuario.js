let nome = prompt("Qual seu nome?")
let sobrenome = prompt("Qual seu sobrenome?")
let campoDeEstudo = prompt("Qual seu campo de estudo?")
let anoDeNascimento = prompt("Qual seu ano de nascimento?")

let idade = 2022 - parseFloat(anoDeNascimento)

alert(
  "Recrutado com sucesso! " +
  "\n Nome completo: " + nome + " " + sobrenome +
  "\n Campo de estudo: " + campoDeEstudo +
  "\n Idade: " + idade
)

console.log(nome + " " + sobrenome)
console.log(campoDeEstudo)
console.log(idade)
