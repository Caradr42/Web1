const path = require('path');
const routes = require('./routes/index')
const PORT = process.env.PORT || 5000;

const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const app = express();

//view engine setup
var layoutsPath = path.join(__dirname, path.join('views', 'layouts'));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: layoutsPath}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var hbsC = hbs.create({});
hbsC.handlebars.registerHelper('setColor', function (index) {
    if (parseInt(index) % 2 === 0){
        return '#eee';
    }
    return '#aaa';
});
// hbsC.handlebars.registerHelper('imgOrder', function (index) {
//     if (parseInt(index) % 2 === 0){
//         return `<h1>{{title}}</h1>
//                 <p></p>
//                 {{#each content}}
//                     <p>{{this}}</p>
//                 {{/each}}`;
//     }
//     return `<img src="{{imgURL}}" class="img-fluid " style="border-radius: 15px;">`;
// });

//other
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(favicon(path.join(__dirname,'public','favicon.ico.png')));
app.use('/favicon.ico', express.static('public/favicon.ico.png'));

//routing
app.use('/', routes);

/*app.get('/', (req, res) => {
    res.render('home');
});*/

app.listen(PORT, () => console.log(`Server started on port ${PORT} on dir ${__dirname}`) );