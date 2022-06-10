$(document).ready(()=>{
    verificaLogin();
    apareceInformacoes();
})

const verificaLogin = ()=> {
    if (!sessionStorage.getItem("user")) {
        location.replace("./index.html");
    }
}

const apareceInformacoes = ()=> {
    let pessoa = JSON.parse(sessionStorage.getItem("user"));
    $("#uiNome").text(pessoa.name);
    $("#uiEmail").text(pessoa.email);
}

const deleteUserInNodeApi = ()=>{
    var myHeaders = new Headers()
    myHeaders.append("Content-type", "application/json")

    let pessoa = JSON.parse(sessionStorage.getItem("user"));

    var raw = JSON.stringify({
      "id": pessoa.id
    })

    var requestOption = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'cors'
    }

    fetch("http://localhost:8080/deleteUser", requestOption)
      .then((response) => { return response.json() })
      .then((response) => { 
          if (!response.error) {
            sessionStorage.removeItem("user");
            verificaLogin();
          } else {
            console.log(response);
          }
       })
      .catch((error) => { console.log(error); })
}

const updatePasswordInNodeApi = (senha)=>{

    var myHeaders = new Headers()
    myHeaders.append("Content-type", "application/json")

    let pessoa = JSON.parse(sessionStorage.getItem("user"));

    var raw = JSON.stringify({
      "id": pessoa.id,
      "password": senha
    })

    var requestOption = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'cors'
    }

    fetch("http://localhost:8080/updatePassUser", requestOption)
      .then((response) => { return response.json() })
      .then((response) => { 
          if (!response.error) {
            let user = response.user;
            sessionStorage.setItem("user", JSON.stringify(user));
            $("#senha").val("");
            $("#senhaConfirm").val("");
            $("#msgExito").show();
            $("#msgExito").text(response.message);

            setTimeout(() => {
              $("#msgExito").hide();
            }, 4000);
          } else {
             console.log(response);
          }
       })
      .catch((error) => { console.log(error); })
}

$("#btModalDeleteConfirm").click(()=>{
    $("#btModalDelete").click();

    setTimeout(() => {
      deleteUserInNodeApi();        
    }, 3500);
})

$("#formEdit").submit((e)=>{
    updatePasswordInNodeApi($("#senha").val().trim());
    e.preventDefault();
})

// clica no botao de trocar senha e abre o modal de edicao
$("#btEditar").click(()=>{
  $("#btModalEdit").click();
})



// tratando senha e confirmação de senha
$("#senha").change((e)=>{

  $("#erroSenha").hide();

  if (e.target.value.trim().length < 6 || e.target.value.trim().length > 15) {

      $("#erroSenha").show();

      setTimeout(() => {
          $("#erroSenha").hide();
      }, 5000);

      e.target.value = "";

  } else {

      let senhaSplit = e.target.value.trim().split(" ");

      if (senhaSplit.length > 1) {

          $("#erroSenha").show();

          setTimeout(() => {
              $("#erroSenha").hide();
          }, 5000);

          e.target.value = "";

      }
  }
})

$("#senhaConfirm").change((e)=>{

  if (e.target.value.trim() != $("#senha").val()) {

      $("#erroSenhaConfirm").show();

      setTimeout(() => {
          $("#erroSenhaConfirm").hide();
      }, 5000);

      e.target.value = "";

  } else {
    $("#erroSenhaConfirm").hide();
  }
})
