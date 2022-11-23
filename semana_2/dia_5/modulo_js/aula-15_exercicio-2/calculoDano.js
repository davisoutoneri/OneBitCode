let nomePersonagemAtacante = prompt("Qual o nome do personagem atacante?")
const poderAtaqueAtacante = parseFloat(prompt("Qual o poder de ataque do personagem atacante?"))
let nomePersonagemDefensor = prompt("Qual o nome do personagem defensor?")
const pontosVidaDefensor = parseFloat(prompt("Quantos pontos de vida o personagem defensor possui?"))
const poderDefesaDefensor = parseFloat(prompt("Qual o poder de defesa do personagem defensor?"))
const temEscudoDefensor = confirm("O persongaem defensor tem escudo?")

let diferencaAtaque = 0
let vidaDanificada = 0

let possuiEscudo = (temEscudoDefensor == true) ? "Sim" : "Não"

if ((poderAtaqueAtacante > poderDefesaDefensor) && (temEscudoDefensor == false)) {
  diferencaAtaque = poderAtaqueAtacante - poderDefesaDefensor
  vidaDanificada = pontosVidaDefensor - diferencaAtaque
} else if ((poderAtaqueAtacante > poderDefesaDefensor) && (temEscudoDefensor == true)) {
  diferencaAtaque = (poderAtaqueAtacante - poderDefesaDefensor) / 2
  vidaDanificada = pontosVidaDefensor - diferencaAtaque
} else if (poderAtaqueAtacante <= poderDefesaDefensor) {
  diferencaAtaque = 0
  vidaDanificada = pontosVidaDefensor - diferencaAtaque
}

alert(
  "O Defensor " + nomePersonagemDefensor + " recebeu " + diferencaAtaque + " do Atacante " + nomePersonagemAtacante + " e ficou com " + vidaDanificada + " de Vida \n \n" +
  "------------------------------------------------------- \n" +
  "Nome do atacante: " + nomePersonagemAtacante + "\n" +
  "Poder de ataque do atacante: " + poderAtaqueAtacante + "\n"  +
  "------------------------------------------------------- \n" +
  "Nome do defensor: " + nomePersonagemDefensor + "\n" +
  "Pontos de vida do defensor: " + vidaDanificada + "/" + pontosVidaDefensor + "\n" +
  "Poder de defesa do defensor: " + poderDefesaDefensor + "\n"  +
  "Possui escudo: " + possuiEscudo
)