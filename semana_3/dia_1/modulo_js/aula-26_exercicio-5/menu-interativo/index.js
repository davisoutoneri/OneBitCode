let escolha = 0

do{
  escolha = prompt(
    "Menu:\n" +
    "1- Voltar ao jogo\n" +
    "2- Reiniciar a fase\n" +
    "3- Amigos\n" +
    "4- Configurações\n" +
    "5- Sair do jogo"
  )
  alert("Você escolheu a opção "+escolha)
}while(escolha < 5)

alert("O jogo está sendo encerrado! Até a próxima!")