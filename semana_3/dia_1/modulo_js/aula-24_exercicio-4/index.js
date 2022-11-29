const nome = prompt("Qual seu nome, turista?")
let seVisitouCidade = prompt("Já visitou alguma cidade?\n S ou N")

nomeCidadesVisitadas = ""
numeroCidadesVisitadas = 0

while (seVisitouCidade != "N"){
  nomeCidadesVisitadas += "- "+prompt("Qual o nome da cidade que você visitou?") + ", \n"
  numeroCidadesVisitadas++
  seVisitouCidade = prompt("Visitou alguma outra cidade?\n S ou N")
}

alert("O turista "+nome+" visitou "+numeroCidadesVisitadas+" cidade! Elas são: \n" + nomeCidadesVisitadas )