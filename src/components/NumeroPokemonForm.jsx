/**
 * Este elemento es un formulario el cual nos permitira elegir la cantidad de pokemons
 * que queremos mostrar.
 * 
 * @returns Formulario para indicar el numero de pokemons que queremos mostrar.
 * @author Alejandro De la Huerga.
 * @since 26/03/2026
 * @version 1.0.0 @lastUpdate 26/03/2026
 */

import { useState } from "react"

function NumeroPokemonForm(props) {

    const [desde,setDesde] = useState(1);
    const [hasta,setHasta] = useState(10);

    const handleDesdeInput = (e) =>{
        setDesde(e.target.value);
    }

    const handleHastaInput = (e) =>{
        setHasta(e.target.value);
    }

    const handleEnvio = (e) =>{
        e.preventDefault();
        props.getPokemons(desde,hasta);
    }

  return (
    // Formulario para modificar el valor de las variables.
    <form onSubmit={handleEnvio}>
      <fieldset>
        <label htmlFor="desde-pokemon">Desde: </label>
        <input
          type="number"
          id="desde-pokemon"
          min={1}
          onChange={handleDesdeInput}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="hasta-pokemon">Hasta: </label>
        <input
          type="number"
          id="hasta-pokemon"
          onChange={handleHastaInput}
        />
      </fieldset>
      <button>Número Pokemon</button>
    </form>
  );
}

export default NumeroPokemonForm