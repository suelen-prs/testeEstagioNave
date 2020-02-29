// E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.


function contaCaracteres(string1, string2){
    return function(string3){
        console.log(string1.length + string2.length + string3.length)
    }

}

contaCaracteres('um', 'dois')('quatro')


