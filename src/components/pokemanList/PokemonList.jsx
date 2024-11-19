import "./PokemonList.css";
import Pokemon from "../Pokemon/pokemon";
import usePokemonList from "../../hook/usePokemon";

function PokemonList() {
  //const { pokemonListState, setpokemonListState } = usePokemonList();
  const { pokemonListState, setPokemonListState } = usePokemonList();
  return (
    <>
      <div className="pokemon-list-wrapper">
        <div className="list">list of pokemon</div>
        <div className="pokemon-wrapper">
          {pokemonListState.isloading
            ? "loading.."
            : pokemonListState.pokemonList.map((p) => (
                <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
              ))}
        </div>

        <div className="control">
          <button
            disabled={pokemonListState.prevUrl == null}
            onClick={() =>
              setPokemonListState({
                ...pokemonListState,
                pokedexUrl: pokemonListState.prevUrl,
              })
            }
          >
            prev
          </button>
          <button
            disabled={pokemonListState.nextUrl == null}
            onClick={() =>
              setPokemonListState({
                ...pokemonListState,
                pokedexUrl: pokemonListState.nextUrl,
              })
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default PokemonList;
