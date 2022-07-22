// FAZER A DINAMICA DE ATAQUE

let divJogo = document.getElementById("jogo");
let formEscolha = document.getElementById("formEscolha");
let divVez = document.getElementById("vez");
let player1;
let player2;
let vez = 1;

window.onload = ()=> {
    divJogo.style.display = "none";
    formEscolha.style.display = "block";
}

document.getElementById("formEscolha").addEventListener("submit", async (e)=> {
    e.preventDefault();
    
    let nomeP1 = document.getElementById("nomeP1");
    let persP1 = document.getElementById("personagemP1");
    let nomeP2 = document.getElementById("nomeP2");
    let persP2 = document.getElementById("personagemP2");

    await atribuirPersonagens(nomeP1.value, persP1.value, nomeP2.value, persP2.value)
    .then(comecarJogo());
})

const comecarJogo = ()=>{
    document.getElementById("formEscolha").reset();
    divJogo.style.display = "block";
    formEscolha.style.display = "none";
    divVez.innerHTML = `Player ${vez}`
}

const atribuirPersonagens = async (nomeP1, persP1, nomeP2, persP2) => {

    criarPersonagem(nomeP1, persP1)
    .then((data)=>{
        player1 = data;

    })
    criarPersonagem(nomeP2, persP2)
    .then((data)=>{
        player2 = data;
    })
}

const criarPersonagem = async (nome, pers)=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    let raw = JSON.stringify({
        "name": nome
    });
    
    var requestOption = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors'
    }

    return fetch(`http://localhost:3000/create${pers}`, requestOption)
    .then((response) => { return response.json() })
    .then((data) => {
        return data.player;
    })
    .catch((err) => { 
        console.log(`Erro! ${err.message}`);
    })
}
