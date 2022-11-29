let dinheiro
let menu 

dinheiro = parseFloat(prompt("Quanto de dinheiro você tem disponível?"))

do{
  menu = parseFloat(prompt(
    "Dinheiro disponível: "+dinheiro+"\n"+
    "-------------------\n"+
    "Menu:\n"+
    "1. Adicionar\n"+
    "2. Remover\n"+
    "3. Sair"
  ))
  switch(menu){
    case 1:
      dinheiro += parseFloat(prompt("Quanto deseja adicionar?"))
      break
    case 2:
      dinheiro -= parseFloat(prompt("Quanto deseja remover?"))
      break
    case 3:
      menu = 3
  }
}while(menu < 3)

alert("Você saiu do controle financeiro!")