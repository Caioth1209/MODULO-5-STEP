$(document).ready(()=>{
    verificaLogin();
})

const verificaLogin = ()=> {
    if (!sessionStorage.getItem("user")) {
        location.replace("../index.html");
    }
}