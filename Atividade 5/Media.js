var nome = prompt("Digite o nome do aluno:");
var nota1 = parseFloat(prompt("Digite a nota 1:"));
var nota2 = parseFloat(prompt("Digite a nota 2:"));
var nota3 = parseFloat(prompt("Digite a nota 3:"));

var media = (nota1 + nota2 + nota3)/3;

media = media.toFixed(2);

alert("Nome do aluno: " + nome + "\nMédia aritmética: " + media);

var decisao = confirm("Deseja realizar outro calculo?");
        
        if(decisao){
            alert("Aperte F5 para realizar outro calculo.");
        } 
        else{
            alert("Você já pode fechar a página. Obrigado.");
        }