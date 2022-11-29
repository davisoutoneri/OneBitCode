const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

console.log(arr)
// ------------------------------------------------------ Adicionar elementos
console.log("-------------------------ADICIONAR ELEMENTOS------------------------")
// push - adiciona um elemento no final do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho) 

// unshift - adiciona um elemento no início do array

tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

// ------------------------------------------------------ Remover elementos
console.log("-------------------------REMOVER ELEMENTOS------------------------")
// pop - remove o último elemento do array
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift - remove o primeiro elemento do array
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// ------------------------------------------------------ Pesquisar elementos
console.log("-------------------------PESQUISAR ELEMENTOS------------------------")
// includes - verificar se um elemento existe no array
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf - pesquisa por um elemento e informa o índice desse elemento no array
const indice = arr.indexOf("Gandalf")
console.log(indice)

// ------------------------------------------------------ Cortar e Concatenar
console.log("-------------------------CORTAR E CONCATENAR-------------------------")
// slide - cortar -> vai criar uma cópia de uma *parte* do array e salva em um novo array
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat - concatenar os elementos
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)


// ------------------------------------------------------ Substituição dos Elementos
console.log("-------------------------SUBSTITUIÇÃO DOS ELEMENTOS-------------------------")
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento", 1, 2, 3, false)
console.log(sociedade)
console.log(elementosRemovidos)


// ------------------------------------------------------ Iterar sobre os Elementos
console.log("-------------------------ITERAR SOBRE OS ELEMENTOS-------------------------")

for (let i = 0; i < sociedade.length; i++){
  const elemento = sociedade[i]
  console.log(elemento + " se encontra na posição " + i)
}