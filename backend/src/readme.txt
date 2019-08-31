Parte 04

    Rotas no Node.JS.

Após definir a base da estrutura do backend, crie um arquivo na raiz do projeto com o nome "routes.js", 
este arquivo sera responsavel por gerenciar todas as rotas do servidor.

Este arquivo é extremamente nessesario pois uma aplicação, pode ter diversas rotas, tanto o backend quanto 
o frontend tem seus proprios gerenciadores de rotas.
É uma boa pratica deixar todas as rotas do servidor, em um arquivo isolado. 

Primeira dentro do arquivo realize o importo da bibliteca "express", para poder fazer a criação de rotas e views.

- const express = require('express');

Uma vez feita a importação do "express" teremos acesso aos seus metodos, faremos uso do metodo ROUTES do express, 
para criar um objeto especifico para rotas
- const routes = express.Router();

Para exporta um modulo ou metodo no node é necessario, para que o servidor fassa uso das rotas.
- module.exports = "NomeDoMetodo"

E no arquivo principal do servidor basta fazer a importação do arquivo, precisa passar o caminho completo de onde 
se encontra o arquivo. 
- const routes = require('./routes');

Feito o import no arquivo principal, basta usar o metodo coringa "USE".
- "NomeDoServidor".use(routes);

Por padrão o express não compreende o recebimento das requisições em JSON, por isso é necessario declarar ao servidor 
de que as requisições feitas a ele pode vir em formato JSON.
Esta declaração precissa ser feita antes da declaração das rotas.
- "NomeDoServidor".use(express.json());

----------------------------------------////////////------------------------------------------////////////-------------------------

    Criando rotas com no Node.JS

Para testar as rotas da aplicação, provavelmente ira necessitar de um software para isso, como postman ou insominia.

Um metodo para a adição de novos registros, por padrão é definido como "POST", os corpos da requisição geralmente são JSON.

- routes.post("/devs",(req,res)=>{
    return res.json();
})

Todas as informações vindas pela requisiçao ao servidor, estarão contidas em forma de um objeto JSON, 
e podem ser acessadas pelo parametro "REQ", geralmente é usado este parametro, para a manipulação de informações.

