const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const mensagem = document.getElementById('message')

form.addEventListener("submit", (e) => {
    e.preventDefault(); //serve para não recarregar a página

    checkInputs(); //nome da função
});

function checkInputs() {
    const nomeValue = nome.value;
    const emailValue = email.value;
    const mensagemValue = mensagem.value;

    if (nomeValue === '') {
        setError(nome, "Name is required");
    } else {
        setSuccess(nome);
    }

    if (emailValue === '') {
        setError(email, "Email is required");
    } else if (!checkEmail(emailValue)) {
        setError(email, "Enter a valid email");
    } else {
        setSuccess(email);
    }

    if (mensagemValue === '') {
        setError(message, "Message is required");
    } else {
        setSuccess(message);
    }
    //verificação geral
    const formControl = form.querySelectorAll(".form-control");
    const formInvalid = [...formControl].every((formControl) => {
        return formControl.className === "form-control success";
    });
    if (formInvalid) {
        console.log("O formulário está 100% válido!");
        alert('Mensagem enviada com sucesso')
    }
}



//funcao para erro
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //
    //
    small.innerText = message;
    formControl.className = "form-control error";
}

//funcao para sucesso
function setSuccess(input) {
    const formControl = input.parentElement;
    //
    formControl.className = "form-control success"
}


// funcao que retorna um email válido
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}