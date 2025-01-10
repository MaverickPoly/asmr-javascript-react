import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (query === "") {
      alert("Please fill in the form...");
      return;
    }
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        className="input-field"
        type="text"
        placeholder="Recipe name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>
        Search Recipe
      </button>
    </div>
  );
};

export default SearchBar;
