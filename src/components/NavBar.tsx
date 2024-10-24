interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const handleChangePokemon = (index: number) => {
    setPokemonIndex(index);
  };

  return (
    <>
      {pokemonList.map((pokemon, setPokemonIndex) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => handleChangePokemon(setPokemonIndex)}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;

// const handleClickNext = () => {
//     setPokemonIndex (pokemonIndex +1)
// };
//     const handleClickPrevious = () => {
//     setPokemonIndex (pokemonIndex -1)
// };

// {pokemonIndex > 0 ? (
//     <button type="button" onClick={handleClickPrevious}>
//     Précédent
//     </button>

// ) : (
// ""
// )}
// {pokemonIndex < pokemonList.length - 1 ? (
//     <button type="button" onClick={handleClickNext}>
//     Suivant
//     </button>
// ) : (
// ""
// )}
