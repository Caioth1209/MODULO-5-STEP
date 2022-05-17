function createUserInNodeApi(values) {
    var myHeaders = new Headers()
    myHeaders.append("Content-type", "application/json")

    var raw = JSON.stringify({
      "name": values.name,
      "email": values.email,
      "password": values.password
    })

    var requestOption = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'cors'
    }

    fetch("http://localhost:8080/addUser", requestOption)
      .then((response) => { return response.json() })
      .then((response) => {
          if (response.error) {
            $("#msgErro").show();
            $("#msgExito").hide();
            $("#msgErro").html(response.message);
            apagaInputs("erro");
          } else {
            $("#msgExito").show();
            $("#msgErro").hide();
            $("#msgExito").html(response.message);
            apagaInputs("exito");
          }
          
          setTimeout(() => {
            $("#msgExito").hide();
            $("#msgErro").hide();
          }, 3000);
      })
      .catch((error) => {
            console.log(error);
      })

}

$("#formularioCadastro").submit((e) => {
    const values = {
        "name": $("#nome").val().trim(),
        "email": $("#email").val().trim(),
        "password": $("#senha").val().trim()
    }

    createUserInNodeApi(values);

    e.preventDefault();
})

function apagaInputs(tipo){
    switch(tipo){
        case "exito":{
            $("#nome").val("");
            $("#email").val("");
            $("#senha").val("");
            break;
        }
        case "erro":{
            $("#email").val("");
            $("#senha").val("");
            break;
        }
    }
}