import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './Pokedex.jsx'
import pokemon from './pokemon.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokedex pokemon={pokemon} />
    </>
  )
}

export default App
