import axios from "axios";
import ".././components/pokemanList/PokemonList.css";
import { useEffect, useState } from "react";



function usePokemonList() {
  // const [pokemonList, setpokemonList] = useState([]);
  // const [isloading, setisloading] = useState(true);

  // const [pokedexUrl, setpokedexUrl] = useState(
  //   "https://pokeapi.co/api/v2/pokemon"
  // );
  // const [nextUrl, setNextUrl] = useState("");
  // const [prevUrl, setPrevUrl] = useState("");

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isloading: true,
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    nextUrl: "",
    prevUrl: "",
  });

  async function downloadPokemons(state) {
    //setisloading(true);

    setPokemonListState({ ...state, isloading: true });
    // this download the lost of the 20 pokemons
    const response = await axios.get(state.pokedexUrl);
    console.log(response);
    //we get the array of pokemons from the results
    const pokemonResults = response.data.results;


    console.log('this is response', response);
    console.log('this is response', response.data);
    console.log(pokemonResults);

    // setNextUrl(response.data.next);
    // setPrevUrl(response.data.previous);
    //console.log("this is", setpokemonListState);
    setPokemonListState((state) => ({
      ...state,
      nextUrl: response.data.next,
      prevUrl: response.data.previous,
    }));

    //console.log(nextUrl);
    // console.log("url 2 ==", prevUrl);

    //iterating over the array of the pokemon and using their url to create an array of the promise
    //that will download those 20 pokemons
    const pokemonResultsPromise = pokemonResults.map((pokemon) => {
      const po = axios.get(pokemon.url);
      console.log(po);
      return po;
    });
    console.log(pokemonResultsPromise);

    // passing that promise aray to axious.all
    const pokemonData = await axios.all(pokemonResultsPromise); // arary of 20 pokemon detailed
    //console.log(pokemonData);

    // now iterae the data of each pokemon ,and extract id, name , image , types
    const res = pokemonData.map((pokeData) => {
      console.log(pokeData);
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        types: pokemon.types,
      };
    });
    // console.log(res);
    // setpokemonList(res);
    // setisloading(false);

    setPokemonListState((state) => ({
      ...state,
      pokemonList: res,
      isloading: false,
    }));
  }

  useEffect(() => {
    downloadPokemons(pokemonListState);
  }, [pokemonListState.pokedexUrl]);

  return { pokemonListState, setPokemonListState };
}
export default usePokemonList;
