let palavra = prompt("Digite uma palavra para analisarmos se é um palíndromo:")

let palavraInvertida = ""

for (let i = palavra.length-1 ; i >= 0 ; i--){
  palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida){
  alert("A palavra é um políndromo!")
} else {
  alert(
    "A palavra não é um políndromo!\n" +
    palavra + "\n" +
    palavraInvertida
  )
} 
