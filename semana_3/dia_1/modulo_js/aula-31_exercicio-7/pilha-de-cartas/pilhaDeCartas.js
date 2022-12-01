let menu = 0
let baralho = []

do{
  let baralhoString = ""
  if(baralho.length > 0) {
    for(let i = 0; i < baralho.length; i++){
      baralhoString += baralho[i]+"\n"
    }
  }else{
    baralhoString = "NÃO HÁ CARTAS NO BARALHO"
  }
  
  menu = parseFloat(prompt(
    "______________________________\n" +
    "MENU:\n" +
    "1 - Adicionar uma carta\n" + 
    "2 - Puxar uma carta\n" +
    "3 - Sair\n" +
    "______________________________\n" +
    "BARALHO:\n" +
    baralhoString +
    "\n______________________________"
  ))

  switch(menu){
    case 1:
      baralho.unshift(prompt("Qual o nome da carta que você adicionará ao topo do baralho?"))
      break
    case 2:
      let cartaPuxada = baralho.shift()
      alert("Você retirou a carta "+ cartaPuxada + " do topo do baralho!")
      break
    case 3:
      break
    default:
      alert("Opção inválida!")
      break
  }
} while(menu >= 0 && menu !== 3)