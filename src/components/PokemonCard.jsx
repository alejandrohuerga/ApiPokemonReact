import { useEffect, useState } from "react";
import './PokemonCard.css';
/**
 * Este componente es una carta con un solo pokemon.
 * Lo importaremos en el componente padre PokemonList.
 * 
 * @returns PokemonCard
 * 
 * @author Alejandro De la Huerga 
 * @version 1.0.0 
 * @since 25/03/2026 @lastUpdate 25/03/2026   
 */

// Recibe datos desde el padre como un pokemon.
function PokemonCard(props) {

    const {pokemon} = props;

  return (
    pokemon.id ? (
    <li className="pokemon-card" onClick={() =>selectedPokemon(pokemon)}>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img className="pokemon-image" src={pokemon.sprites.front_default} alt="imagen pokemon"/>
        <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
    </li>
    ) : (
        <p className="loading">Cargando...</p>
    )
  )
}

export default PokemonCard