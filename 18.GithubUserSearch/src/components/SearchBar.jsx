import React from "react";

const SearchBar = ({ username, setUsername, fetchUserData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub Username..."
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
