var express = require('express');
var app = express();
var porta = 3000;
var propostas = require('./propostasociais')
var interesse = require('./interesse')
var interesses = require('./interesses')
var bodyParser = require('body-parser');
var url = require('url');

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

app.get('/interesses', function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var id = req.query.id;
    res.send(interesses.find(interesse => interesse.Interessado.Id == id));
});

app.post('/MarcarInteresse', function(req, res) {
    var id = req.body.id;
    var usuario = req.body.usuario;

    var proposta = propostas.find(proposta => proposta.Id == id);
    var interese = new interesse(proposta, {Id: usuario.id, Nome: usuario.nome})

    interesses.push(interese);

    res.send();
});

app.listen(porta);

console.log('Listening on port ' + porta + '...');