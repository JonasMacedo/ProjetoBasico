Propriedade no React.

Os componentes do react pode aceitar certas propriedades, são muito usadadas em definições de rotas.

Pode ser definindo como um parametro em uma função ou usando desestruturação pode ser pasado qualquer elemento,
por padrão todo o componente do react que são definidos como rotas, herdam um elemento chamado "history" 
vindo do "react-router-dom" e possui diversos metodo para definição de rotas.

- export default function Login({history}){
    history.push('/main');
}

----------------------------------------////////////------------------------------------------////////////-------------------------