const mysql = require('mysql');

var connMySQL = function (){
    console.log('Conexão estabelecida')
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'site_fatec'

    });
}

module.exports = function () {
    console.log('O autoload carregou o módulo de conexão o db');
    return connMySQL;
}

