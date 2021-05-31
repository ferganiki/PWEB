var texto = require('./modulo1.ejs');
app = require('./app/config/server');

const adicionar_usuario = require('./app/routes/adicionar_usuario');
const cursos = require('./app/routes/cursos');
const historia = require('./app/routes/historia');
const professores = require('./app/routes/professor');
const home = require('./app/routes/home');

home(app)
professores(app);
historia(app);
adicionar_usuario(app);
cursos(app);


app.listen(3000, function () {
    console.log('servido iniciado');
})