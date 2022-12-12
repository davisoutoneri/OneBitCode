let menu = 0
const imoveis = []


do{
  menu = parseFloat(prompt(
    "BEM VINDO AO CADASTRO DE IMÓVEIS!\n" +
    "QUANTIDADE DE IMÓVEIS: " + imoveis.length + "\n" +
    "____________________________________\n" +
    "MENU:\n" +
    "1 - Adicionar um novo imóvel\n" +
    "2 - Mostrar todos os imóveis\n" +
    "3 - Sair"
  ))

  switch(menu){
    case 1:
      const imovel = {}
      imovel.nomeProprietario = prompt("Qual o nome do proprietário?")
      imovel.quantidadeDeQuartos = parseFloat(prompt("Quantos quartos o imóvel possui?"))
      imovel.quantidadeDeBanheiros = parseFloat(prompt("Quantos banheiros o imóvel possui?"))
      imovel.possuiGaragem = confirm("O imóvel possui garagem?")

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.nomeProprietario +
        "\nQuantidade de quartos: " + imovel.quantidadeDeQuartos +
        "\nQuantidade de banheiros: " + imovel.quantidadeDeBanheiros +
        "\nPossui garagem: " + imovel.possuiGaragem 
      )
      if(confirmacao === true){
        imoveis.push(imovel)
        alert("Imóvel salvo com sucesso!")
      }else{
        alert("Voltando ao menu!")
      }
    
      break
    case 2:
      let dadosImoveis = ""
      let garagem = ""
      for (let i = 0; i < imoveis.length; i ++){
        if(imoveis[i].possuiGaragem === true){
          garagem = "Sim"
        }else{
          garagem = "Não"
        }
        dadosImoveis += "________________________________________\n"+
        "Imóvel " + (i+1) + "\n" +
        "Proprietário: " + imoveis[i].nomeProprietario + "\n" + 
        "Quantidade de quartos: " + imoveis[i].quantidadeDeQuartos + "\n" +
        "Quantidade de banheiros: " + imoveis[i].quantidadeDeBanheiros + "\n" +
        "Possui garagem: " + garagem + "\n" +
        "________________________________________\n"
      }
      console.log(imoveis)
      alert(dadosImoveis)
      break
    case 3:
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
      break
  }
}while(menu >= 0 && menu !== 3)