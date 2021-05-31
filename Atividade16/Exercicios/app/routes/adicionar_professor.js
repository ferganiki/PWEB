module.exports = function(app){
    app.get('/admin/adicionar_professor', function(req,res){
        res.render('admin/adicionar_professor');
    });

    app.post('/professor/salvar', function(req,res){

        var professor = req.body;
        var connection = app.config.dbConnection();
        var professoresModel = app.models.professorModel;

        professoresModel.salvarProfessor(professor, connection, function(error, results){
                // após inserir redireciona o navegador para outra página
                // se der erro na inclusao criar um erro 500 --> nao sabe o que significa

                if(error){
                console.log('Erro ao inserir no banco:' + error);
                res.status(500).send(error);
                } else {
                    console.log('professor criado!!!');
                    res.redirect('/informacao/professores');
                }
        });
    });
}