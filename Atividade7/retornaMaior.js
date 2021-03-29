var a = parseFloat(prompt("Digite o número 1: "));
var b = parseFloat(prompt("Digite o número 2: "));
var c = parseFloat(prompt("Digite o número 3: "));

var maior = retornaMaior(a, b, c);

function retornaMaior(a, b, c){
     return (Math.max(a, b, c));
}

alert("Maior número: " + maior);