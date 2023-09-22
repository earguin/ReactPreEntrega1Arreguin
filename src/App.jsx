import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar";


function App() {
  return (
    <main className='main'>
      <Navbar />   
      <ItemListContainer greeting="¡Hola! Tu paleta es de ...   " />     
    </main>
  );
}
export default App;