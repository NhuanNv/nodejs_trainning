'use strict';

const path = require('path');
const express = require('express');
const expHbs = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public/img')));

// HTTP logger
app.use(morgan('combined'))

// Template Engine
const handlebars = expHbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
}
);
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/news', function (req, res) {
    res.render('news');
});


app.listen(port, () => console.log(`Example calling in http://localhost:${port}`))
