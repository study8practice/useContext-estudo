import { useContext } from 'react'
import './App.css'
import { DadosContext } from './dadosContext'

function App() {
  const {notes} = useContext(DadosContext);

  return (
    <div>
      {notes}
    </div>
  )
}

export default App
