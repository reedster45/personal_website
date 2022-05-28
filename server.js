const express = require('express');
const app = express();
const port = 3000;

// setup views and static files
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(express.urlencoded({extended: true})); // req.body


// async???


app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});


// listen on port 3000
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}...`);
});