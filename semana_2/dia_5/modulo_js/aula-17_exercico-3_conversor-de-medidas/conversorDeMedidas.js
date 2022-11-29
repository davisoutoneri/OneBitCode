const metros = parseFloat(prompt("Digite um valor em metros"))
const medida = prompt(
  "- milímetro (mm)\n" + 
  "- centímetro (cm)\n" +
  "- decímetro (dm)\n" +
  "- decâmetro (dam)\n" +
  "- hectômetro (hm)\n" +
  "- quilômetro (km)\n" +
  "____________________\n" +
  "Digite a sigla da medida que você deseja converter:"
  )

let conversao = 0

switch (medida) {
  case "mm":
    conversao = metros * 1000
    alert(metros + " metros == " + conversao + " milímetros")
    break
  case "cm":
    conversao = metros * 100
    alert(metros + " metros == " + conversao + " centímetros")
    break
  case "dm":
    conversao = metros * 10
    alert(metros + " metros == " + conversao + " decímetros")
    break   
  case "dam":
    conversao = metros / 10
    alert(metros + " metros == " + conversao + " decâmetros")
    break
  case "hm":
    conversao = metros / 100
    alert(metros + " metros == " + conversao + " hectômetros")
    break   
  case "km":
    conversao = metros / 1000
    alert(metros + " metros == " + conversao + " quilômetros")
    break 
  default:
    alert("Opção de medida inválida! Tente novamente!") 
}