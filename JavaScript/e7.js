// E.7 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.

const array = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

console.log('Olá ' + array[0].nome.substring(0,1).toUpperCase().concat(array[0].nome.substring(1)) +' '+
  array[0].sobrenome.substring(0,1).toUpperCase().concat(array[0].sobrenome.substring(1)))

