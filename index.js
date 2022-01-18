const express = require('express');
const Metadata = require('./metadata.json');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.redirect('index');
});
app.get('/index',(req,res)=>{
    res.render(`index.ejs`);
});

app.listen(Metadata.port, ()=>{
    console.log(`${Metadata.name} init - http://localhost:${Metadata.port}`);
});