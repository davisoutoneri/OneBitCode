const resultado = prompt(
  "escolha uma alternativa: \n" +
  "1) Eu sou moralista\n" +
  "2) Eu sou disciplinado\n" +
  "3) Eu sou inabalável\n"
)

const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
  case 1:
    alert("O resultado é 'a', moralista")
    break
  case 2:
    alert("O resultado é 'b', disciplinado")
    break
  case 3:
    alert("O resultado é 'c', inabalável")
    break
  default:
    alert("Finalizando!")
}