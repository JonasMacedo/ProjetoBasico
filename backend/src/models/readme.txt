Parte 02.
    
    Model.

Para melhor organização do codigo, crie uma pasta chamada "src" e dentro dela 
crie uma outra pasta chamda "model".

O model dentro do modelo MVC, representa uma tabela dentro ou uma estrutura de dados,
que sera gravando em um banco de dados, seu nome sempre esta relacionado com o lemento 
ou estrutura, do banco a qual se refere.


----------------------------------------////////////------------------------------------------////////////-------------------------

    Elemento model.

Os aquivos contidos dentro do "model" que sera uma estrutra para um elemento no banco de dados, 
conhecido como "schema" ele contem os campos e tipos que serão salvos no DB.

Dentro do arquivo importe o mongoose, igual no servidor.
- const mongoose = require('mongoose');

Dependendo pode se usar a desestruturação para usar metodos especificos para a criaçao do "schema".
- const {Schema,model} = require('mongoose');

Feita a importação do mongose ou dos metodos desejados, crie uma outra variavel e informe que 
ela sera um novo schema, use um metodo "schema" e abra um json, nele sera passado os campos 
que serão salvos no DB.

- const ProductSchema = new mongoose.schema({
    title:{
        type: string,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

Dentro de um schema, se pode ter varios atributos, especificando os elementos.
    TYPE: trata-se do tipo do elemento, como int,double,string e etc.
    REQUIRED: informa que o campo é obrigatorio. 

A ultima coluna de uma tabela geralmente é a coluna "createdAt" que sera preenchida,
automaticamente pelo DB, que ira informar quando foi inserido o elemento no DB.

No final da estrutura do schema, para registrar o model na aplicação e exporta-lo.
- mongoose.model('NomeDoElemento',NomeDoSchema);

Feito isso basta fazer uma requisição no arquivo principal do servidor, especificando o 
caminho e o model desejado.
- require('./src/model/'NomeDoElemento');

----------------------------------------////////////------------------------------------------////////////-------------------------

    Multiplo elemento model.

Caso se tenha muitos elementos model, na aplicação uma boa pratica é usar uma bibilioteca especilizada nisso.
- npm install require-dir

Apos realizar o download da bibilioteca, realize a importação dela no arquivo principal do servidor.
Com isso basta apenas indicar o caminho do model, e não precisa indicar o elemento model, pois a bibilioteca
ira se encarregar disso.