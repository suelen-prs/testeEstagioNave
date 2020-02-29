// E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.

const dic = {4: 'a', 3: 'e', 1: 'i', 5: 's'}
frase = 'T35t3 d3 35t4g1o'
frase1 = frase.replace(/3/g, dic[3])
frase2 = frase1.replace(/5/g, dic[5])
frase3 = frase2.replace('4', dic[4])
frase4 = frase3.replace('1', dic[1])


console.log(frase4)



