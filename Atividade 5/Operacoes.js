var num1 = parseFloat(prompt("Digite o número 1:"));
var num2 = parseFloat(prompt("Digite o número 2:"));

var sum = (num1 + num2).toFixed(2);
var sub = (num1 - num2).toFixed(2);
var mult = (num1 * num2).toFixed(2);
var div = (num1 / num2).toFixed(2);

num1 = parseInt(num1);
num2 = parseInt(num2);


var rest = (num1 % num2);


alert("Soma: " + sum + "\nSubtração: " + sub + "\nMultiplicação: " + mult
      + "\nDivisão: " + div + "\nResto da divisão: " + rest);

var decisao = confirm("Deseja realizar outro calculo?");
        
        if(decisao){
            alert("Aperte F5 para realizar os calculos outra vez.");
        } 
        else{
            alert("Você já pode fechar a página. Obrigado.");
        }