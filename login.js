let users = [];







function Logar(event) {

    // if (password != aluno.fields.Senha || user != aluno.fields.Email) {
    //     // return alert("Usuário e/ou senha inválidos!");
    //     document.querySelector(".errorUser").style.display = "block";
    // }

    event.preventDefault();

    let user = document.querySelector(".user").value
    let password = document.querySelector(".password").value
    let passwordErr = document.querySelector(".passwordempty").value

    

    if (user == "") {
        userEmpty = document.querySelector(".userempty").innerHTML = "Insira Seu Usuario"
    }

    if (password == "") {
        passwordErr = document.querySelector(".passwordempty").innerHTML = "Insira Seu Usuario"
    }



    // if (!userData) {
    //     // return alert("Usuário e/ou senha inválidos!");
    //     document.querySelector(".errorUser").style.display = "block";
    // }
    function redirectTime() {

        window.location.href = "./acesso-ao-monitoramento.html"
    }

    fetch("https://api.airtable.com/v0/appKwE4pNr1KNTzfS/tblE9WhghkZKM6Nw1", {

        
        

        headers: {
            Authorization: 'Bearer patV7sDVCPgMVD2I8.78a49f99aa541878bb2b08a372fac02175480ed16784a6deac11f3e26faafb63',
        }

    }).then((resp) => {
        return resp.json()
    }).then((data) => {

        alunos = data.records
        alunos.map((aluno) => {
            // console.log(aluno.fields.Senha)
            console.log(aluno.fields.Email)

            if (password === aluno.fields.Senha & user === aluno.fields.Email) {

                localStorage.setItem("Cpf", aluno.fields.Cpf)
                localStorage.setItem("Senha", password)
                localStorage.setItem("Nome", aluno.fields.NomeAlvo)
                localStorage.setItem("Alvo", aluno.fields.Alvo)
                localStorage.setItem("Liberado", "usuario ok")
                localStorage.setItem("Status", aluno.fields.Status)
                redirectTime();

            }
        })
    })
}


function closeAlert() {
    document.querySelector(".errorUser").style.display = "none";
}



function Click() {

    const passwordInput = document.querySelector("#password")
    const eye = document.querySelector("#eye")

    console.log('eye')
    eye.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
}
