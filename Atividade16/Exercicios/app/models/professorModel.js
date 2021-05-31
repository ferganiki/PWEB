module.exports = function () {
    this.getProfessores = function(connection, callback){
        connection.query('select * from professores', callback);
    }

    this.getProfessor = function (connection, callback) {
        connection.query('select * from professores where id_professor=1', callback);
    }


    this.salvarProfessor = function(professor, connection, callback){
        connection.query('insert into professores SET ?', professor, callback);
        console.log(professor);
    }

    return this;
}