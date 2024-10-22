function PokemonCard({pokemon}) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <p>
        {" "} 
          <img src={pokemon.imgSrc} alt="Bulbasaur" />
      </p>
      ) : (
        <p> ??</p>
      )}
      <figcaption> {pokemon.name}</figcaption>
    </figure>
  );
}



export default PokemonCard;
