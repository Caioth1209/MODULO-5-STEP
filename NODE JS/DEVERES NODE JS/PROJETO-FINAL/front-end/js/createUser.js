const createUserInNodeApi = (values)=> {
    
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
        .then((res) => {
            if (!res.error) {
                $("#msgExito").show();
                $("#msgExito").text(res.message);
                $("#nome").val("");
                $("#email").val("");
                $("#senha").val("");
            } else {
                $("#msgErro").show();
                $("#msgErro").text(res.message);
                $("#email").val("");
            }

            setTimeout(() => {
                $("#msgExito").hide();
                $("#msgErro").hide();
            }, 4000);
        
        })
        .catch((error) => { console.log(error); })
}

$("#formCadastro").submit((e)=>{

    createUserInNodeApi(
        {name: $("#nome").val(),
        email: $("#email").val(),
        password: $("#senha").val()}
    );
    e.preventDefault();
})


// tratando nome
$("#nome").change((e)=>{

    let regex = /[0-9]/;

    if (regex.test(e.target.value.trim())) {
        $("#erroNome").show();

        setTimeout(() => {
            $("#erroNome").hide();
        }, 5000);

        e.target.value = "";

    } else if (e.target.value.trim().length < 4 || e.target.value.trim().length > 35) {

        $("#erroNome").show();

        setTimeout(() => {
            $("#erroNome").hide();
        }, 5000);

        e.target.value = "";

    } else {
        $("#erroNome").hide();
    }
})

// tratando email
$("#email").change((e)=>{

    $("#erroEmail").hide();

    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(e.target.value.trim())) {
        $("#erroEmail").hide();
    } else {
        $("#erroEmail").show();

        setTimeout(() => {
            $("#erroEmail").hide();
        }, 5000);

        e.target.value = "";
    }
})
////////////////////////////

// tratando senha
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
////////////////////////////