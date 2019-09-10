Parte 03.
    
    Controller

Esta pasta contem os arquivos referentes a logica, estes arquivos 
irão lidar com as operações que determinado model possa ter, 
como listagem, criação de elementos, atualização, remoção entre outras.

Como ira trabalhar com os models e alguns podem estar contidos no DB, 
sera importante realizar a importação da biblioteca do mangoose. 

Tambem sera necessario ralizar o import do model do objeto, que 
se deseja trabahar.

----------------------------------------////////////------------------------------------------////////////-------------------------

  Acessando Apis.

Para obter as informações vindas de outros serviços, é necessario realizar o import 
do "Axios" 

-yarn add axios

Dentro do arquivo "controller" realize o import, da biblioteca do axios.


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
