module.exports = function () {

    this.salvarUsuario = function(usuario, connection, callback){
        connection.query('insert into usuario SET ?', usuario, callback);
        console.log(usuario);
    }

    return this;
}