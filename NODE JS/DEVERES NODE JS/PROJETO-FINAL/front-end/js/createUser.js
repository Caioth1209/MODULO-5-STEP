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


// fazer tratamento de dados