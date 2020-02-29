// E.8 Imprima a soma das idades (dica: utilize reduce)

const array = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

//console.log(array.map(a =>a.idade))
const somaIdade = array.map(a => a.idade).reduce(function (acumulador, atual){
    return acumulador + atual
})

console.log('Soma das Idades: ' + somaIdade)