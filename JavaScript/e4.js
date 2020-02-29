// E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.


const texto = "teste 1 de 2 string 3"

const divide = texto.split(' ')
divide[1] = '[removido]'
divide[3] = '[removido]'
divide[5] = '[removido]'

console.log(divide[0],divide[1],divide[2],divide[3],divide[4],divide[5])
