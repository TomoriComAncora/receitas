import './App.css'
import teste from './afrodite.json'
import { useState } from 'react'


function Receitas(){
  const [index, setIndex] = useState(0);

  function incrementar(){
    if(index < (teste.length -1)){
      setIndex(index + 1)
    }
  }
  function decrementar(){
    if(index > 0){
      setIndex(index - 1)
    }
  }


   return(
    <div>
      <button onClick={decrementar}>anterior</button>
      <button onClick={incrementar}>proximo</button>
      <h1>{teste[index].nome}</h1>
        {teste[index].secao.map(sec =>(
          <div>
            <h1>{sec.nome}</h1>
            <div>
              {sec.conteudo.map(cont => (<p>{cont}</p>))}
            </div>
          </div>
        ))}
    </div>
  )
 
}

function App() {
  return (
    <div className="App">
      <Receitas></Receitas>
    </div>
  )
}

export default App
