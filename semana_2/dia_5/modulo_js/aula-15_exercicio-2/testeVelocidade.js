let entrada1Veiculo = prompt("Qual o primeiro veículo?")
let entrada1Velocidade = prompt("Qual é a velocidade do primeiro veículo?")
let entrada2Veiculo = prompt("Qual o segundo veículo?")
let entrada2Velocidade = prompt("Qual é a velocidade do segundo veículo?")

const velocidade1 = parseFloat(entrada1Velocidade)
const velocidade2 = parseFloat(entrada2Velocidade)

if (velocidade1 == velocidade2) {
  alert("A velocidade é igual entre " + entrada1Veiculo + " e " + entrada2Veiculo)
} else if (velocidade1 > velocidade2) {
  alert(entrada1Veiculo + " tem uma velocidade maior")
} else if (velocidade1 < velocidade2) {
  alert(entrada2Veiculo + " tem uma velocidade maior")
}