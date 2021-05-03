var checkMaiusculo = document.getElementById('maiusculo');
var checkMinusculo = document.getElementById('minusculo');

function alterarMaiusculo(){
    texto = document.getElementById('texto');

    if(texto.value.length < 1){
        alert("Insira pelo menos uma letra!");
        checkMaiusculo.checked = false;
        checkMinusculo.checked = false;
    }

    if(checkMaiusculo.checked == true){
        texto.value = texto.value.toUpperCase();
        checkMinusculo.checked = false;
    }
}

function alterarMinusculo(){
    texto = document.getElementById('texto');

    if(texto.value.length < 1){
        alert("Insira pelo menos uma letra!");
        checkMinusculo.checked = false;
        checkMaiusculo.checked = false;
    }
    
    if(checkMinusculo.checked == true){
        texto.value = texto.value.toLowerCase();
        checkMaiusculo.checked = false;
    }
}
