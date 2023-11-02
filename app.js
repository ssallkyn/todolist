const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
    const day = date.getDate();
    res.render('list', { listTitle: day, newListItems: items });
});

app.post('/', function (req, res) {
    const item = req.body.newItem;
    items.push({ title: item, content: '' }); 
    res.redirect('/');
});

app.get('/work', function (req, res) {
    res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/services', function (req, res) {
    res.render('services');
});

app.get('/products', function (req, res) {
    res.render('products');
});

app.get('/reviews', function (req, res) {
    res.render('reviews');
});

app.listen(27017, function () {
    console.log('Server is running on port 27017');
});
