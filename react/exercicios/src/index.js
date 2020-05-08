import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './components/Pai'
import Filho from './components/Filho'

const elemento = <div> 
<Pai nome="Paulo" sobrenome="Silva">
    <Filho nome="Pedro"></Filho>
    <Filho nome="Paulo"></Filho>
    <Filho nome="Carla"></Filho>
</Pai>
</div>

ReactDOM.render(elemento, document.getElementById('root')) /** O React DOM é o responsável por atualizar o DOM para exibir os elementos React.*/

{/*props é um objeto passado como parâmetro para o nosso componente ou classe componente, que irá conter
as propriedades do componente que iremos renderizar*/}

//Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.