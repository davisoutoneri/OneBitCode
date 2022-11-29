let numero = parseFloat(prompt("Digite um número para calcularmos sua tabuada:"))
let resultados = ""

for (let i = 0; i <= 20; i++) {
  let multiplicacao = numero * i
  resultados += numero + " * " + i + " = " + multiplicacao + "\n"
}

alert("Tabuada de " + numero + "\n _______________ \n" + resultados)