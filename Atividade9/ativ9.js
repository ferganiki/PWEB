//Parte 1.

//Criando a função construtora para o retângulo
function Retangulo(x, y){
     this.x = x;
     this.y = y;
     this.calcArea = function(){
          var area = x * y;
          return area;
     }
}

var x = parseFloat(prompt("Digite o valor da base:"));
var y = parseFloat(prompt("Digite o valor da altura:"));

var retangulo = new Retangulo(x, y);

alert(retangulo.calcArea());

//Parte 2.

//Criando a superclasse Conta
function Conta(){
     var nome;
     this.getNome = function(){
          return nome;
     }
     this.setNome = function(valor){
          nome = valor;
     }

     var banco;
     this.getBanco = function(){
          return banco;
     }
     this.setBanco = function(valor){
          banco = valor;
     }

     var numConta;
     this.getNumConta = function(){
          return numConta;
     }
     this.setNumConta = function(valor){
          numConta = valor;
     }

     var saldo;
     this.getSaldo = function(){
          return saldo;
     }
     this.setSaldo = function(valor){
          saldo = valor;
     }
}

//Criando a subclasse Conta Corrente
function ContaCorrente(){
     var saldoEsp; //Saldo especial
     this.getSaldoEsp = function(){
          return saldoEsp;
     }
     this.setSaldoEsp = function(valor){
          saldoEsp = valor;
     }
}
//Criando a subclasse Conta Poupança
function ContaPoupanca(){
     var juros;
     this.getJuros = function(){
          return juros;
     }
     this.setJuros = function(valor){
          juros = valor;
     }

     var dtVenc; //Data vencimento
     this.getDtVenc = function(){
          return dtVenc;
     }
     this.setDtVenc = function(valor){
          dtVenc = valor;
     }
}
//Criando a herança
ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

//Criando os objetos
ContaCorrente01 = new ContaCorrente();
ContaPoupanca01 = new ContaPoupanca();

//Inserção de dados para a Conta Corrente
alert("Conta Corrente:");
var nomeC = prompt("Digite o nome:"); //C = corrente
var bancoC = prompt("Digite o banco:");
var numContaC = parseInt(prompt("Digite o número da conta:"));
var saldoC = parseFloat(prompt("Digite o valor do saldo:"));
var saldoEsp = parseFloat(prompt("Digite o valor do saldo especial:"));

//Setando os valores da Conta Corrente
ContaCorrente01.setNome(nomeC);
ContaCorrente01.setBanco(bancoC);
ContaCorrente01.setNumConta(numContaC);
ContaCorrente01.setSaldo(saldoC);
ContaCorrente01.setSaldoEsp(saldoEsp);

//Inserção de dados para a Conta Poupança
alert("Conta Poupança:");
var nomeP = prompt("Digite o nome:"); //P = poupança
var bancoP = prompt("Digite o banco:");
var numContaP = parseInt(prompt("Digite o número da conta:"));
var saldoP = parseFloat(prompt("Digite o valor do saldo:"));
var juros = parseFloat(prompt("Digite o valor do juros:"));
var dataVenc = prompt("Digite o valor da data de vencimento:");

//Setando os valores da Conta Poupança
ContaPoupanca01.setNome(nomeP);
ContaPoupanca01.setBanco(bancoP);
ContaPoupanca01.setNumConta(numContaP);
ContaPoupanca01.setSaldo(saldoP);
ContaPoupanca01.setJuros(juros);
ContaPoupanca01.setDtVenc(dataVenc);

//Exibindo os valores
alert("Conta Corrente:" + "\n" + 
"Nome: " + ContaCorrente01.getNome() + "\n" + 
"Banco: " + ContaCorrente01.getBanco() + "\n" + 
"Conta: " + ContaCorrente01.getNumConta() + "\n" + 
"Saldo: " + ContaCorrente01.getSaldo() + "\n" + 
"Saldo Especial: " + ContaCorrente01.getSaldoEsp());

alert("Conta Poupança:" + "\n" + 
"Nome: " + ContaPoupanca01.getNome() + "\n" + 
"Banco: " + ContaPoupanca01.getBanco() + "\n" + 
"Conta: " + ContaPoupanca01.getNumConta() + "\n" + 
"Saldo: " + ContaPoupanca01.getSaldo() + "\n" + 
"Juros: " + ContaPoupanca01.getJuros() + "\n" + 
"Data Vencimento: " + ContaPoupanca01.getDtVenc());