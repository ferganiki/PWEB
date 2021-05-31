module.exports = function (app) {
    app.get('/informacao/professores/detalhaprofessor', function (req, res) {
        var connection = app.config.dbConnection();
        var professoresModel = app.models.professorModel;

        professoresModel.getProfessores(connection, function(error, results){
            res.render('informacao/professores/detalhaprofessor', { profs : results });
        })
    });
}