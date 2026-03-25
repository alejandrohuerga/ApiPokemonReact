import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import './PokemonCard.css';

/**
 * Este componente devuelve una lista <ul>"> 
 * Dentro la lista habrá elementos Pokemon importados como otro componente.
 * @returns <ul>
 * 
 * @author Alejandro De la Huerga 
 * @version 1.0.0 
 * @since 25/03/2026 @lastUpdate 25/03/2026
 */

/**
 * Vamos hacer la petición a la API aqui para sacar varias card 
 * en vez de hacerlo dentro del li que solo puede ser una.
 */

function PokemonList() {

    const [pokemons , setPokemons] = useState([]);

    // Cuando cargue la página traeme 10 pokemons.
    useEffect(() =>{
        getPokemons(30)
    }, [])

    // Petición a la API 
    /**Paso a paso:
        fetch(...) → llama a la API
        await → espera a que llegue la respuesta    
        .json() → convierte la respuesta en objeto JS
        return data → devuelve el Pokémon 
    */
    const fetchPokemon = async (index) =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        const data = await response.json();
        return data;
    }

    const getPokemons = async (quantity) =>{
        const pkmnArr = [];

        for (let i = 1 ; i <= quantity ; i++){
            const pokemon = await fetchPokemon(i);
            pkmnArr.push(pokemon);
        }

        setPokemons(pkmnArr);
    } 
    // Recorre el array y lo convierte en: <PokemonCard pokemon={p1} />,
    const pokemonCards = pokemons.map((pokemon) =>{
        return <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
    })
  return (
    <ul className="pokemon-list">
        {pokemonCards}
    </ul>
  )
}

export default PokemonList