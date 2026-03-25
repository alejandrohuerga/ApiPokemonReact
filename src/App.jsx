import { useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {

  const [pokemonSeleccionado, setPokemonSeleccionado] = useState({});


  return (
    <>
        {
          pokemonSeleccionado && (
            <div>
              <h2>Pokemon Seleccionado</h2>
              <PokemonDetails pokemon={pokemonSeleccionado}/>
            </div>
          )
        }
        <PokemonList selectedPokemon={setPokemonSeleccionado}/>
    </>
  )
}

export default App