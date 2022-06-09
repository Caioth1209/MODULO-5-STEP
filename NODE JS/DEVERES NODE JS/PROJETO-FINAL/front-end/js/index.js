$(document).ready(()=>{
    sessionStorage.removeItem("user");
})

const loginUserInNodeApi = (values)=> {
    var myHeaders = new Headers()
    myHeaders.append("Content-type", "application/json")

    var raw = JSON.stringify({
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

    fetch("http://localhost:8080/loginUser", requestOption)
      .then((response) => { return response.json() })
      .then((response) => { 
          if (response.error) {

            $("#msgErro").show();
            $("#msgErro").html(response.message);
            setTimeout(() => {
                $("#msgErro").hide();
            }, 4000);

          } else {
              sessionStorage.setItem("user", JSON.stringify(response.user));
              location.replace("./logged.html");
          }
      })
      .catch((error) => { console.log(error); })
}

$("#formLogin").submit((e)=>{

    let email = $("#email").val();
    let senha = $("#senha").val();

    loginUserInNodeApi({email: email, password: senha});

    e.preventDefault();
})