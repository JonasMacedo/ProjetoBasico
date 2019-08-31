Parte 03.
    
    Controller

Esta pasta contem os arquivos referentes a logica, estes arquivos 
irão lidar com as operações, que determinado model possa ter, 
como listagem, criação de elementos, atualização, remoção entre outras.

Como ira trabalhar com os models e alguns podem estar contidos no DB, 
sera importante realizar a importação da biblioteca do mangoose. 

Tambem sera necessario ralizar o import do model do objeto, que 
se deseja trabahar.

----------------------------------------////////////------------------------------------------////////////-------------------------

Criando registros no DB.

Dentro do arquivo do controler desejado e no metodo de exportação, crie 
um metodo e defina nele o código, para a adição de novos registros.
Geralmente os mestodos que realizam operações no back-end sou todos assincronos,
para evitar conflitos nos arquivos servidos.

- async plusElement(req,res){
    //Adicionando elementos DB.
    const product = await Product.create(req.body);

    return res.json(product);
}

Todas as informações vindas pela requisiçao ao servidor estarão contidas 
no parametro "REQ", geralmente é usado este parametro, para a manipulação de informações.

Após definido o novo metodo no controller, vá ao arquivo responsavel pelas 
rotas "routes.js" e defina uma nova rota, por padrão o metodo para a 
criação de elementos e de informações no JS é o metodo "POST".

Dentro do metodo "POST" sera passado o caminho url eo metodo do controler,
que contem o codigo responsavel pela ação.

- routes.post('/url',Controller.<MetodoDaAção>);

No software do insominia pode ser criado a rota "post" para realizar o teste,
usando o tipo de corpo da requisiçao como json.

Dentro do arquivo principal do servidor o "server.js", precisa ser permitido 
o envio de dados para a plicação no formato de json, que é o mais utilizado em apis REST.

- app.use(express.json());

----------------------------------------////////////------------------------------------------////////////-------------------------

Localizando registros no DB.

Para localizar um registro no DB, podemos usar um identificador.

O identificador sera fornecido pela rota, na especificação da rota, 
junto com a definição da url é passado identificador "id". O express permite 
esta passagem de identificador.

-routes.get('/products/:id',ProductController.findElement);

O mongoose fornece um metodo capaz de realizar buscas no banco com o metodo "findById",
este metodo recebe as informações contida nos parametros de envio "params".


-await Product.findById(req.params.id);


----------------------------------------////////////------------------------------------------////////////-------------------------

  Atualização de registros no DB.

Sua estrutura segue a mesma logica dos demais metodos do mongoose.

O metodo de atualização, ira realizar a busca do elemento por um identificador 
que vem dos parametros de envio, junto com o conteudo que vem do corpo da requisiçao json.
Tambem é passado um objeto json, o "NEW: TRUE" este objeto json ira informar ao mongoose que
este elemento sera atualizado.

- const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
    new: true
  });

A rota ao ser declarada tera que fazer o uso do metodo de envio "PUT", 
seguido pelo caminho url eo metodo responsavel pela ação.

- routes.put('/products/:id',ProductController.updateElement);

----------------------------------------////////////------------------------------------------////////////-------------------------

Deletando registros.

Sua estrutura é similar ao do metodo de update.

Apenas mudando o metodo fornecido pelo mongoose.

- await Product.findByIdAndRemove(req.params.id);

----------------------------------------////////////------------------------------------------////////////-------------------------

Paginação de lista.

Muito util quando a aplicação possui muitos registros no DB, pois evita é mais performatico.
Para poder utilar a paginação na api, primeira realize o download da biblioteca de paginação do mongoose.

- npm install mongoose-paginate

Uma vez feito o download da dependencia, no arquvo model responsavel pelo esquema do DB, 
realize a importação do "paginate" e apos a criação do schema, declare a criação do plugin do paginate.

- "NomeDoSchema".plugin(mongoosePaginate);

Após a criação do plugin no schema, basta ir no arquivo controller desejado e usar o metodo de paginação 
que sera fornecido pela nova biblioteca.

- const product = await Product.paginate({}, {page: 1, limit: 10});

O metodo "paginate" recebe como parametros dois objetos json.
Sendo o primeiro responsavel pela inserção de condições de busca, para a utilização de filtros de buscas SQL.
E o segundo parametro, é indicado a pagina atual e o limite de dados retornado por pagina. 

----------------------------------------////////////------------------------------------------////////////-------------------------

Manipulando a pagina por URL.

Normalmente pode ser feita a manipulação da apresentação das paginas pela URL, passando parametros pela rota, 
geralmente sendo o numero da pagina.

Para isso basta inserir uma variavel para recolher este paramentro enviado, pela rota e usa-lo no metodo de paginação. 
Com uso do "req.query" podemos fazer o recolhimento de informações nas requisições do tipo "GET".
Use um padrão default para evitar falhas na apresentação das paginas.

-const {page = 1} = req.query;

e no metodo "paginate" pode ser usado o short sintax, para apresentação da pagina corretamente.

- const product = await Product.paginate({}, {page, limit: 10});