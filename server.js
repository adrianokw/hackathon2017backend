var express = require('express');
var app = express();
var porta = 3000;
var propostas = require('./propostasociais')
var interesse = require('./interesse')
var interesses = require('./interesses')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.get('/', function(req, res) {
    res.send('Hello Seattle\n');
  });

app.get('/obter', function(req, res) {
    res.send(propostas);
});

app.post('/MarcarInteresse', function(req, res) {
    console.log(req.body);
    // var id = req.param("parametros");
    // var usuario = req.param("usuario");
    // var proposta = propostas.find(proposta => proposta.Id == id);
    // var interesse = new interesse(proposta, {Id: usuario.id, Nome: usuario.Nome})
    // interesses.push(interesse);
});

// app.get('/inserir', function(req, res) {
//     var id = req.param('id');
//     propostas.push(troca);
// });

app.listen(porta);

console.log('Listening on port ' + porta + '...');