// E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato
// 'ENDERECO, NUMERO, CIDADE/ESTADO'.

function buscaCep(cep){
   fetch('viacep.com.br/ws'+ cep +'/json/', {
       method:'get'
   })
}

console.log(buscaCep('96080432'))