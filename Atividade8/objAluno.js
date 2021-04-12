//Criando o obj Aluno1 pela primeira forma
let Aluno1 = {
     RA: "0030481921040",
     Nome: "Fernando Gabriel Ninomiya Klinke"
}

alert("Esse é o primeiro jeito de se criar um objeto:" + "\nRA: " + Aluno1.RA + "\nNome: " + Aluno1.Nome);

//Criando o obj Aluno2 pela segunda forma
var Aluno2 = new Object();
Aluno2.RA = "0030481921041";
Aluno2.Nome = "Fernando Ninomiya Gabriel Klinke";

alert("Esse é o segundo jeito de se criar um objeto:" + "\nRA: " + Aluno2.RA + "\nNome: " + Aluno2.Nome);

//Criando o obj Aluno3 pela terceira forma

var Aluno3 = {
     RA: "0030481921042",
     Nome: "Fernando Gabriel Klinke Ninomiya"
}

alert("Esse é o terceiro jeito de se criar um objeto:" + "\nRA: " + Aluno3.RA + "\nNome: " + Aluno3.Nome);