import axios from "axios";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "API KEY";

export const fetchRecipes = async (query) => {
    const response = await axios.get(API_URL, {
        params: {
            apiKey: API_KEY,
            query: query,
        },
    });
    return response.data.results;
}