const arr = [
  "1º Nível",
  "2º Nível",
  "3º Nível"
]

console.log("Array normal:---------------------------------")
console.log(arr)
console.log("----------------------------------------------")

const matriz = [
  [
    "1º Nível",
    "1º Nível",
    "1º Nível"
  ],
  [
    "2º Nível",
    "2º Nível",
    "2º Nível"
  ],
  [
    "3º Nível",
    "3º Nível",
    "3º Nível"
  ]
]

console.log("Matriz/Array bidimensional:-------------------")
console.log(matriz)
console.log("----------------------------------------------")

const matriz2 = [
  "1º nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá mundo!"],
    ["3º nível, 2º item", "Oi, mundo!",
      ["4º nível, 1º item", "Eita bixiga!"]
    ]
  ],
  []
]

console.log(matriz2)
console.log("----------------------------------------------")
console.log(matriz2[0])
console.log("-------------------")
console.log(matriz2[1])
console.log(matriz2[1][0])
console.log(matriz2[1][1])
console.log("-------------------")
console.log(matriz2[2])
console.log(matriz2[2][1])
console.log(matriz2[2][1][0])
console.log("-----------------------------------------------")

const matriz3 = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
// console.table(matriz3)

// matriz3.push(["Nova linha (l4)"])
// matriz3[0].push("Nova coluna (c5)")
// console.table(matriz3)

for (let i = 0; i < matriz3.length; i++){
  for (let j = 0; j < matriz3[i].length; j++){
    const elemento = matriz3[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
  }
}