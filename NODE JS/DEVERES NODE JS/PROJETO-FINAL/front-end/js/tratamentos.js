$(document).ready(()=>{

    $("#erroNome").hide();
    $("#erroEmail").hide();
    $("#erroSenha").hide();
    $("#msgExito").hide();
    $("#msgErro").hide();

    /////////// tratando nome
    $("#nome").change((e)=>{

        $("#erroNome").hide();
        
        if (e.target.value.trim().length < 4) {

            $("#erroNome").show();

            setTimeout(() => {
                $("#erroNome").hide();
            }, 5000);

            e.target.value = "";

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(e.target.value.trim())) {

                $("#erroNome").show();

                setTimeout(() => {
                    $("#erroNome").hide();
                }, 5000);

                e.target.value = "";

            }
        }
    })

    // tratando login de caixa
    $("#email").change((e)=>{

        $("#erroEmail").hide();

        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
        if (!regex.test(e.target.value.trim())) {

            $("#erroEmail").show();

            setTimeout(() => {
                $("#erroEmail").hide();
            }, 5000);

            e.target.value = "";
        }

    })
    ////////////////////////////

    // tratando senha de caixa
    $("#senha").change((e)=>{

        $("#erroSenha").hide();

        if (e.target.value.trim().length < 6) {

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
    
});