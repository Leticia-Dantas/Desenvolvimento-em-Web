const express =  require('express');
const mustacheExpress =  require('mustacheExpress');
const app = express();

app.engine('html' mustacheExpress());
app.set('view enginer', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded(extended: true));

