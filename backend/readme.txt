Parte 01.

    Back-End.

basicamente seu fluxo segue a seguinte ordem, uma requisição é feita ao servidor,
e o servidor devolvendo uma resposta tratada por alguma logica ja definida pelo desenvolvedor. 

----------------------------------------////////////------------------------------------------////////////-------------------------

    Node.

Node sera resposavel pelo back-end da aplicação, devido separar melhor 
a parte de front-end da de back-end, alem de poder facilitar a aplicação 
ser servida de modo web e mobile. Alem de fazer melhor o controle da versão do projeto.
Para inciar o projeto basta escolher um diretorio para a raiz do projeto, e ir no CMD.
Digite o comando no CMD.
- npm init -y

----------------------------------------////////////------------------------------------------////////////-------------------------

    Express.

O express é basicamente um MicroFramework, ira auxiliar a lidar com rotas e vews.
Digite o comando no CMD.
- npm install express

----------------------------------------////////////------------------------------------------////////////-------------------------

Server

O serve sera o arquivo principal da configuração do back-end, onde todas as requisições irão chegar.

Para realizar a importação de um aquivo no back-end basta declarar uma requisição.
- const express = require ('express');

Neste arquivo com a importação do express, ja estara sendo definido o projeto como um servidor do express, 
mas para ele ouvir algum endereço web, sera necessario fazer com que o novo servidor criado, 
monitore uma porta de acesso, com o metodo "listen" fornecido pelo express.

- "NomeDoServidor".listen(3001);

Para executar a aplicação basta usar o comando.
- node "AquivoPincipal".js

----------------------------------------////////////------------------------------------------////////////-------------------------

Criando rotas com o NodeJS.

Apos definir o uso do express no back-end, usando o metodo "Get" sera declarado o a rota.
Se for a rota raiz da aplicação, basta pasar como parametro apenas a barra "/", o segundo paramentro
sera uma função que recebera dois parametros o "req" eo "res".

- app.get('/',(req,res)=>{
    res.send("Olá, mundo!");
});

REQ: Trata-se da requisição que esta sendo feita ao servidor, este parametro irá conter 
todos os detalhes e informaçoes, como parametros, corpo da requisição, cabeçalho da requisição, usuario e autenticações e etc.

RES: Trata-se da resposta da requisição, que será trabalhada e defifnida pelo programador, o paramentro "res" possui
diversos metodos.

SEND: Trata-se de um metodo interno do atributo "res".


----------------------------------------////////////------------------------------------------////////////-------------------------

    Nodemon.

Esta dependencia faz a atualização do servidor, sempre que ele detectar uma alteração em seu código.
Digite o comando no CMD.
- npm install -D nodemon

O Nodemon sera instalado como dependencia de desenvolvimento, não sera util quando a palicação estiver em modo de produção.
Para utiliza-lo da melhor forma, é bom criar um novo escript no "package.json" que sera o script de desenvolvimento.

- "scripts":{
    "dev": "nodemon "AquivoPincipal"
}

Feita a configuração basta executar no CMD o comando:
-npm run "NomeDoScript"

----------------------------------------////////////------------------------------------------////////////-------------------------

    Conectando com o banco de dados.

Para realizar a conexão com o banco de dados, sera necessaria a instalação de uma nova dependencia que sera o mongoose,
sendo feita pelo CMD.

- npm install mongoose.

O mongose trata-se de um ORM, de banco não relacional, ele permite usar codigo JS para comandos SQL.
Dentro do arquivo principal do serivdor, realize a importação do mongoose, e crie um metodo para inciar o bano de dados.

- mongoose.connect('mongodb+srv://Jonas:Dmolidor18@cluster0-1itqr.mongodb.net/BackEnd_Project?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

useNewUrlParser: trata-se de um atributo para identificar a versão da linguagem sql do banco de dados.

----------------------------------------////////////------------------------------------------////////////-------------------------

Usando cors.

O cors permite o acesso a aplicação apartir de outros endereços web.
Para permitir todo o tipo de acesso externo, primeiro se realiza o download da dependencia do cors.

- npm install cors

Após realizado o download, realize a importação da biblioteca no aquivo principal da aplicação, 
e depoi fazer com que a palicação a use. 

