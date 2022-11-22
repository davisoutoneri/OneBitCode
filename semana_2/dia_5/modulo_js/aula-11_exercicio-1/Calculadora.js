let entrada1 = prompt("Digite um número!")
let entrada2 = prompt("Digite, novamente, um número!")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

let soma = x + y
let subtracao = x - y
let multiplicacao = x * y
let divisao = x / y

alert(
  " Soma: " + soma +
  "\n Subtração: " + subtracao +
  "\n Multiplicação: " + multiplicacao +
  "\n Divisão: " + divisao
)

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)