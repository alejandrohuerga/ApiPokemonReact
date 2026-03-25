
function PokemonDetails(props) {

    const {pokemon} = props;

  return (
    <section className="selected-pokemon">
        <div className="pokemon-container">
            <h2 className="text">{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="pokemon imagen" className="pokemon-img"/>
        </div>
        <h3 className="text"> HP: {pokemon.stats[0].base_stat}</h3>
    </section>
  )
}

export default PokemonDetails