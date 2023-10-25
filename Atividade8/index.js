const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadora');

router.get('/', calculadoraController.form);
router.post('/calcular', calculadoraController.calcular);

module.exports = router;

/*const express = require('express');
const mustacheExpress = require('mustache-express');
const app =  express();

app.engine('html', mustacheExpress());
app.set('view engine','html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({extended: true}));

app.use("/", requise('./src/routes/calculadoraRoutes'))

const PORT = 8080;
app.listen(PORT, function(){
    console.log("app rodando na porta" + PORT);
});*/
