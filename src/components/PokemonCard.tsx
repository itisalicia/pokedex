interface pokemonprops {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({pokemon}: pokemonProps ){
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
