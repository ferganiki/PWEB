module.exports = function (app) {
    app.get('/admin/adicionar_usuario', function (req, res) {
        res.render("admin/adicionar_usuario");
    });

    app.post('/admin/salvar', function(req,res){

        var usuario = req.body;
        var connection = app.config.dbConnection();
        var usuariosModel = app.models.usuarioModel;

        usuariosModel.salvarUsuario(usuario, connection, function(error, results){
                if(error){
                console.log('Erro ao inserir no banco:' + error);
                res.status(500).send(error);
                } else {
                    console.log('usuario criado!!!');
                    res.redirect('/admin/adicionar_usuario');
                }
        });
    });
}