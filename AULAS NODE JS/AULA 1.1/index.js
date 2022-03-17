import fetch from 'node-fetch';

// pega um endpoint pela url usando o fetch
// faz a busca no endpoint
// se achar algo certo, retorna o valor
// se não, trata o erro.
fetch("https://www.infomoney.com.br/ferramentas/criptomoedas/")
.then((response)=>{
    return response.json();
})
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
    console.log(err);
});