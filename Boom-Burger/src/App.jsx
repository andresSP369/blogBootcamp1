import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Page/Home'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Componentes/Navbar'
import data from './data/data.js';

function App() {
  const [count, setCount] = useState(0)
  const [redirect, setRedirect] = useState(<Home />);
  const [listaart,setlistaart] = useState([])
    const Agregarproductonuevo = (newItem )=> {
      console.log(newItem)
    //const updatedItems = [...listaart, newItem];
    setlistaart(listaart.concat(newItem) );
    console.log(listaart)
    
   };
    //  useEffect(() => {
        // Load data on component mount
      //  setlistaart(data);
     // }, []);
 
   

   
  return (
    <>
      <Navbar ActualizarArt={Agregarproductonuevo} setRedirect={setRedirect}/>
     {redirect}
      
    </>
  )
};

export default App
