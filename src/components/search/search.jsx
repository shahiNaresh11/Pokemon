import { useState } from "react";
import "./search.css";
function Search({ updateSearchTerm }) {
  // const [searchTerm, setSearchterm] = useState();
  return (
    <div className="search-wrapper">
      <input
        id="pokeman-name-search"
        type="text"
        placeholder="pokeman name...."
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
    </div>
  );
}
export default Search;
