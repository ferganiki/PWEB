function validar(){
    const nome = document.form.elements[0].value;
    if(!validaNome(nome)){
        alert("O nome precisa de no mínimo 10 caractéres!");
        return;
    }
    const email = document.form.elements[1].value;
    if(!validaEmail(email)){
        alert("Este email não é válido!");
        return;
    }
    const comentario = document.form.elements[2].value;
    if(!validaComentario(comentario)){
        alert("O comentário precisa de no mínimo 20 caractéres!");
        return;
    }
    const sim = document.form.elements[3].checked, nao = document.form.elements[4].checked;
    if(!validaPesquisa(sim, nao)){
        alert("Responda a pesquisa antes de enviar!");
        return;
    }
    if(sim){
        alert("Volte sempre a esta página!");
    }
    else{
        alert("Que bom que você voltou a vistar esta página!");
    }
}

function validaNome(nome){
    if(nome.length < 10){
        return false;
    }
    return true;
}

function validaEmail(email){
    if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
        return false;
    }
    return true;
}

function validaComentario(comentario){
    if(comentario.length < 20){
        return false;
    }
    return true;
}

function validaPesquisa(sim, nao){
    if(sim || nao){
        return true;
    }
    return false;
}

form.addEventListener('submit', submitForm);
form.addEventListener('reset', () => {});