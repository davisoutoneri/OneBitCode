let menu = 0
let fila = []


do{
  let filaString = ""
  if(fila.length > 0){
    for(let i = 0; i < fila.length; i++) {
      filaString += (i+1)+"º " + fila[i] + ",\n"
    }
  }else{
    filaString = "FILA VAZIA\n"
  }
  

  menu = parseFloat(prompt(
    "MENU:\n" +
    "1 - Novo paciente\n" +
    "2 - Consultar paciente\n" +
    "3 - Sair\n" +
    "_____________________\n" +
    "Fila de pacientes: \n\n" +
    filaString +
    "_____________________\n"
  ))

  switch (menu){
    case 1:
      fila.push(prompt("Qual o nome do novo paciente?"))
      break
    case 2:
      if(fila.length > 0){
        let consultado = fila.shift()
        alert("O(a) paciente " + consultado + " foi consultado(a)!")
      }else{
        alert("Ainda não há pacientes na fila!")
      }
      break
    case 3: 
      alert("Saindo do sistema...")
      break
    default:
      alert("Opção inválida!")
      break
  }

} while (menu >=0 && menu !== 3)