const express = require ('express');

const hbs = require ('hbs');

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

//nota rapida
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/Mrphillip', (req, res)=>{
    res.render('mistefili');
});

app.get('/sakimichan', (req, res)=>{
    res.render('sakimi');
});

app.get('/piyo', (req, res)=>{
    res.render('piyo');
});

app.get('/Mato', (req, res)=>{
    res.render('Mato');
});

app.get('/pascurodri', (req, res)=>{
    res.render('pascurodri');
});

app.get('/mirealidad', (req, res)=>{
    res.render('mirealidad');
});

app.listen(3000, ()=>{
    console.log('escuchando el puerto 3000')

});