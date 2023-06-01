import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Page/Home'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Componentes/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [redirect, setRedirect] = useState(<Home />);

  return (
    <>
      <Navbar  setRedirect={setRedirect}/>
     {redirect}
    </>
  )
}

export default App
