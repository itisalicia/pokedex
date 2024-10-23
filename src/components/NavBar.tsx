interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
}

function NavBar({pokemonList, pokemonIndex, setPokemonIndex}: NavBarProps) {
    const handleClickNext = () => {
    setPokemonIndex (pokemonIndex +1)
};
    const handleClickPrevious = () => {
    setPokemonIndex (pokemonIndex -1)
};
    return (
<div>

    {pokemonIndex > 0 ? (
        <button type="button" onClick={handleClickPrevious}> 
        Précédent
        </button>
    
    ) : (
    ""
)}
    {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleClickNext}> 
        Suivant
        </button>
    ) : (
    ""
)}
</div>     
);
}


export default NavBar;