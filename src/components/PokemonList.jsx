import PokemonCard from "./PokemonCard"
/**
 * Este componente devuelve una lista <ul>"> 
 * Dentro la lista habrá elementos Pokemon importados como otro componente.
 * @returns <ul>
 * 
 * @author Alejandro De la Huerga 
 * @version 1.0.0 
 * @since 25/03/2026 @lastUpdate 25/03/2026
 */

function PokemonList() {
  return (
    <ul className="pokemon-list">
        <PokemonCard/>
    </ul>
  )
}

export default PokemonList