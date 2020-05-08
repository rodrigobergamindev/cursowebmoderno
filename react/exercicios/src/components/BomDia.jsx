import React from 'react'

export default props => 
    <div>
    <h1> Bom dia {props.nome}! </h1>
    <h2>Até breve!</h2>
    </div>




//export default props => [ //um array envolvendo os elementos do componente
   // <h1 key='h1'> Bom dia {props.nome}! </h1>,
   // <h2 key='h2'>Até breve!</h2>

//]


//export default props => 
//<React.Fragment> {/* React.Fragment é utilizado para renderizar componentes JSX adjacentes*/}
  //  <h1>Bom dia {props.nome}! </h1>
   // <h2>Até breve!</h2>
//</React.Fragment>
    
