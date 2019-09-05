    SRC

A pasta contem todos os arquivos que contem codigos importantes 
para a aplicaçao, todos os codigos ficaram dentro desta pasta.

----------------------------------------////////////------------------------------------------////////////-------------------------

    Navegação dentro da pagina.

Para realizar navegações entre as paginas da aplicação, é necessario primeiro fazer o download de uma bibliteca
especifica para isso no react.

- yarn add react-router-dom

Depois crie um arquivo na pasta "SRC", chamado "routes".
Neste arquivo ira ficar todo o código responsavel pela rota dos componentes da aplicação.

Dentro do "routes", realize o import da bibliteca necessaria do react e do react-router-dom,
tambem sera necessaria realizar o import dos demais componentes ja existentes na aplicação.

- import {BrowserRouter, Switch, Route} from 'react-router-dom'

Após ralizado os imports necessarios, crie um componente como uma função e não como classe, 
neste componente sera definido, as rotas e como acessa-las.

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/products/:id" component={Product}></Route>
        </Switch>
    </BrowserRouter>
);

BrowserRouter: Responsavel por definir que as rotas estão sendo acessadas atraves de um nevagador.

Switch: Sera responsavel por permitir que apenas uma rota seja executada por vez.

Route: São as rotas definidas, para cada rota é passada o caminho dela pelo "path", seguido pelo componente 
que sera executado. O "exact" serve para especificar um caminho, assim evitando que o react se perca em determiandas rotas, 
Para receber paramentro nas rotas é necessaria usar o ":NomeDoParametro" para o router-dom poder identificar o paramentro.
Sempre que houver uma rota deverá ser adicionada junta com as demais.

Feita a configuração da rotas sera necessario apenas abilitar a exportação do arquivo para que outros arquivos 
da aplicaçao possa utiliza-lo.    

- export default Routes;

Por padrão o arquivo deve ser importado no arquivo principal da plicação, para assim apontar o aquivo de rotas 
este por sua vez realizara o devido direcionamento das rotas.

----------------------------------------////////////------------------------------------------////////////-------------------------

Indicando uma rota.

Uma vez ja definida a rota, no arquivo responsavel pelas rotas.

Caso um elemento aponte para outra pagina na aplicação, sera necessario realizar o import do componente "Link" 
que esta contida no "react-router-dom".

- import {Link} from 'react-router-dom';

Feita a importação do componente, no elemento que vai apontar para pagina seguinte, defina uma tag conforme 
o componente importado, seguido pela palavra chave "to" que ira especificar a rota e os parametros.

- <Link to = {`/products/:id${product._id}`} >Acessar</Link>