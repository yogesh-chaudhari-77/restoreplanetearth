const express = require('express');

const app = express();

app.listen(3000);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', (req, res) => {
    res.render('temp');
});

app.get('/sec', (req, res) => {
    res.render('section');
});