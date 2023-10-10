import { useState } from 'react'

import MeuComponente from './components/MeuComponente'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MeuContador from './Meucontador'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <div>
    <h1>Hello Word, React</h1>
    <MeuComponente/>
    <MeuBotao  conteudo='Me click'/> 

    <MeuBotao  titulo='produto do card'  />
    <MeuContador/>
     

    </div>
    
      
      
    </>
  )
}

// Exemplo de componentes em react 



function MeuBotao(props){   //Props = objeto
  props.titulo;
  return(

  <>

  
  <p>Professor meu botao não funciona😓</p>

  <button>{props.conteudo}</button>
  <div>{props.titulo}</div>


  </>
  )
}

export default App
