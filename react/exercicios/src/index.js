import React from 'react'
import ReactDOM from 'react-dom'

import Clock from './components/Clock'



ReactDOM.render(<Clock />, document.getElementById('root')) /** O React DOM é o responsável por atualizar o DOM para exibir os elementos React.*/

/*props é um objeto passado como parâmetro para o nosso componente ou classe componente, que irá conter
as propriedades do componente que iremos renderizar*/

//Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.