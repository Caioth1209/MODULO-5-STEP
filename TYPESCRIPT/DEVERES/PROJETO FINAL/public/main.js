let divJogo = $("#jogo");
let formEscolha = $("#formEscolha");
let divVez = $("#vez");
let btAtaque = $("#btAtaque");
let btReiniciar = $("#btReiniciar");
let divStatsP1 = $("#statsP1");
let divStatsP2 = $("#statsP2");
let player1;
let player2;
let tipoP1;
let tipoP2;
let frases = "";
let vez = Math.floor(1 + Math.random() * (2 - 1));

window.onload = ()=> {
    divJogo.hide();
    formEscolha.show();
    btAtaque.hide();
}

formEscolha.submit( async (e)=> {
    e.preventDefault();
    
    let nomeP1 = $("#nomeP1");
    let persP1 = $("#personagemP1");
    let nomeP2 = $("#nomeP2");
    let persP2 = $("#personagemP2");

    tipoP1 = persP1.val();
    tipoP2 = persP2.val();

    await atribuirPersonagens(nomeP1.val(), persP1.val(), nomeP2.val(), persP2.val())
    .then(comecarJogo())
    .then(imprimirEstatisticas());
})

btAtaque.click(async ()=>{
    btAtaque.hide();
    $("#loadingStats").show();

    let typeAttacker = vez == 1 ? tipoP1 : tipoP2;
    let typeOpponent = vez == 1 ? tipoP2 : tipoP1;
    let attackerDamage = Math.floor(10 + Math.random() * (20 - 10));
    let opponentLife = vez == 1 ? player2._life : player1._life;

    let nameAttacker = vez == 1 ? player1._name : player2._name;
    let nameOpponent = vez == 1 ? player2._name : player1._name;

    await atacarOponente(typeAttacker, typeOpponent, attackerDamage, opponentLife, nameAttacker, nameOpponent)
    .then((data)=>{
        if (vez == 1) {
            player2._life = data.opponentLife;
        } else {
            player1._life = data.opponentLife;
        }

        frases = data.message;
        imprimirEstatisticas();
    });
})

btReiniciar.click(()=>{
    reiniciarJogo();
})

const comecarJogo = ()=>{
    formEscolha[0].reset();
    divJogo.show();
    formEscolha.hide();
}

const imprimirEstatisticas = ()=>{
    
    setTimeout(() => {
        $("#loadingStats").hide();
        $("#frases").show();
        $("#frases").html(`<h3>${frases}</h3>`);
        btAtaque.show();

        mudaVez();

        let statsP1 = 
        `<h3>Player 1: ${tipoP1}</h3>
        <p>Nome: ${player1._name}</p>
        <p>Força: ${player1._strength}</p>
        <p>Escudo: ${player1._armorClass}</p>
        <p>Vida: ${player1._life}</p>`

        divStatsP1.html(statsP1);

        let statsP2 = 
        `<h3>Player 2: ${tipoP2}</h3>
        <p>Nome: ${player2._name}</p>
        <p>Força: ${player2._strength}</p>
        <p>Escudo: ${player2._armorClass}</p>
        <p>Vida: ${player2._life}</p>`
    
        divStatsP2.html(statsP2);

        if (player2._life == 0 || player1._life == 0) {
            btAtaque.hide();
        }
    }, 1500)
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

const atacarOponente = async (typeAttacker, typeOpponent, attackerDamage, opponentLife, nameAttacker, nameOpponent) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    let raw = JSON.stringify({
        "typeAttacker": typeAttacker,
        "typeOpponent": typeOpponent,
        "attackerDamage": attackerDamage,
        "opponentLife": opponentLife,
        "nameAttacker": nameAttacker,
        "nameOpponent": nameOpponent
    });
    
    var requestOption = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors'
    }

    return fetch(`http://localhost:3000/atk`, requestOption)
    .then((response) => { return response.json() })
    .then((data) => {
        return data;
    })
    .catch((err) => { 
        console.log(`Erro! ${err.message}`);
    })
}

const mudaVez = () => {
    vez = vez == 1 ? 2 : 1; 
    divVez.html(`<h3> Vez: Player ${vez} </h3>`);
}

const reiniciarJogo = () => {
    location.reload();
}