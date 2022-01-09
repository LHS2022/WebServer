const express = require('express');
const Metadata = require('./metadata.json');

const Server = express();
Server.get('/', (req,res)=>{
    res.send(`${Metadata.name} index pag`);
});

Server.listen(Metadata.port, ()=>{
    console.log(`${Metadata.name} init - http://localhost:${Metadata.port}`);
});