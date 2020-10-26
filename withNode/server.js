const path = require('path');
const routes = require('./routes/index')
const PORT = process.env.PORT || 5000;

const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

//view engine setup
var layoutsPath = path.join(__dirname, path.join('views', 'layouts'));
console.log(layoutsPath);

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: layoutsPath}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//other
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//routing
app.use('/', routes);

/*app.get('/', (req, res) => {
    res.render('home');
});*/

app.listen(PORT, () => console.log(`Server started on port ${PORT} on dir ${__dirname}`) );