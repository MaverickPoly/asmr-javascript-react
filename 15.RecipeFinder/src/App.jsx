import { useState } from "react";
import { fetchRecipes } from "./api";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

  const onSubmit = async (query) => {
    const results = await fetchRecipes(query);
    setRecipes(results);
  };

  return (
    <div className="app">
      <h1 className="title">Recipe Finder</h1>
      <SearchBar onSearch={onSubmit} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
