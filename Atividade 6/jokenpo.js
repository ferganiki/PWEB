document.getElementById("pedra").src="pedra.png";
document.getElementById("papel").src="papel.png";
document.getElementById("tesoura").src="tesoura.png";

var vitoriaPC = 0;
var vitoriaSER = 0;

function jogar(){
    document.getElementById("humano").src="";
    document.getElementById("pedra").src="";
    document.getElementById("papel").src="";
    document.getElementById("tesoura").src="";
    
    var escolha = parseInt(prompt("Digite a escolha:"));
    var escolhaPC = Math.round(Math.random() * (3 - 1) + 1);
    document.getElementById("opcao").innerHTML="";

    if(escolha == escolhaPC){
        alert("Empate!");
        switch(escolhaPC){
            case 1:
                document.getElementById("pc").src="pedra.png";
                break;
            case 2:
                document.getElementById("pc").src="papel.png";
                break;
            case 3:
                document.getElementById("pc").src="tesoura.png";
                break;
        }
        switch(escolha){
            case 1:
                document.getElementById("humano").src="pedra.png";
                break;
            case 2:
                document.getElementById("humano").src="papel.png";
                break;
            case 3:
                document.getElementById("humano").src="tesoura.png";
                break;
        }
        document.getElementById("texto").innerHTML="Empate!";
    }
    else if (escolha == 1 && escolhaPC == 2){
        document.getElementById("pedra").src="pedra.png";
        alert("Vitória do computador!");
        vitoriaPC = vitoriaPC + 1;
        document.getElementById("texto").innerHTML="Vitória do computador!";
    }
    else if (escolha == 2 && escolhaPC == 1){
        document.getElementById("papel").src="papel.png";
        alert("Vitória do ser humano!");
        vitoriaSER = vitoriaSER + 1;
        document.getElementById("texto").innerHTML="Vitória do ser humano!";
    }
    else if (escolha == 1 && escolhaPC == 3){
        document.getElementById("pedra").src="pedra.png";
        alert("Vitória do ser humano!");
        vitoriaSER = vitoriaSER + 1;
        document.getElementById("texto").innerHTML="Vitória do ser humano!";
    }
    else if (escolha == 3 && escolhaPC == 1){
        document.getElementById("tesoura").src="tesoura.png";
        alert("Vitória do computador!");
        vitoriaPC = vitoriaPC + 1;
        document.getElementById("texto").innerHTML="Vitória do computador!";
    }
    else if (escolha == 2 && escolhaPC == 3){
        document.getElementById("papel").src="papel.png";
        alert("Vitória do computador!");
        vitoriaPC = vitoriaPC + 1;
        document.getElementById("texto").innerHTML="Vitória do computador!";
    }
    else if (escolha == 3 && escolhaPC == 2){
        document.getElementById("tesoura").src="tesoura.png";
        alert("Vitória do ser humano!");
        vitoriaSER = vitoriaSER + 1;
        document.getElementById("texto").innerHTML="Vitória do ser humano!";
    }
    
    switch(escolhaPC){
        case 1:
            document.getElementById("pc").src="pedra.png";
            break;
        case 2:
            document.getElementById("pc").src="papel.png";
            break;
        case 3:
            document.getElementById("pc").src="tesoura.png";
            break;
    }
}

function resetar(){
    document.getElementById("opcao").innerHTML="1. Pedra&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 2. Papel&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 3. Tesoura";
    document.getElementById("pedra").src="pedra.png";
    document.getElementById("papel").src="papel.png";
    document.getElementById("tesoura").src="tesoura.png";
    document.getElementById("humano").src="";
    document.getElementById("pc").src="";
    document.getElementById("texto").innerHTML="";
    vitoriaPC = 0;
    vitoriaSER = 0;
}

function mostrar_placar(){
    alert("Placar:" + "\nSer humano: " + vitoriaSER + "\nComputador: " + vitoriaPC);
}