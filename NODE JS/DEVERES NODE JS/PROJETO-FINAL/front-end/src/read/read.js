$(document).ready(()=>{
    verificaLogin();
})

const getUsersInNodeApi = ()=> {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'cors'
    }

    fetch("http://localhost:8080/getUsers", requestOptions)
    .then(response => response.json())
    .then((res) => {

        $("#listaUsuarios").show();

        let texto = "";

        for (let i = 0; i < res.users.length; i++) {

            texto += 
                `<div class="userInfo">
                    <p class="info">Nome: <span>${res.users[i].name}</span></p>
                    <p class="info">Email: <span>${res.users[i].email}</span></p>
                </div>`
        }

        $("#listaUsuarios").html(texto);
    })
    .catch(error => console.log('error: ', error));
}

$("#btConsultar").click(()=>{
    getUsersInNodeApi();
})