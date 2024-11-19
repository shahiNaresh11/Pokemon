// import { useState } from "react";
// import "./pokedex.css";
// import PokemonList from "../pokemanList/PokemonList.jsx";
// import Search from "../search/search.jsx";

// function Pokedex() {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="pokedex-wrapper">
//       <Search updateSearchTerm={setSearchTerm} />

//       {searchTerm.length == 0 ? <PokemonList /> : ""}
//     </div>
//   );
// }

// export default Pokedex;

import { useState } from "react";
import "./pokedex.css";
import PokemonList from "../pokemanList/PokemonList";
import Search from "../search/search";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pokedex-wrapper">
      <Search updateSearchTerm={setSearchTerm} />

      {/* Use strict equality for comparison */}
      {searchTerm.length === 0 ? <PokemonList /> : ""}
    </div>
  );
}

export default Pokedex;
