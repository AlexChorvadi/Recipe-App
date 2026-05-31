import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchRecipes = async () => {
    try {
      setLoading(true);

      let url = "";
      if (ingredient.trim() !== "") {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
      }
      else if (category.trim() !== "") {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      } else if (search.trim() !== "") {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
      }

      const res = await axios.get(url);

      let meals = res.data.meals || [];

      if (search && category.trim() !== "" || ingredient.trim() !== "") {
        meals = meals.filter((meal) =>
          meal.strMeal.toLowerCase().includes(search.toLowerCase())
        );
      }

      setRecipes(meals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [ingredient, category, search]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchIngredient = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );

      setIngredients(res.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIngredient();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    const exists = favorites.some(
      (item) => item.idMeal === recipe.idMeal
    );

    if (exists) {
      setFavorites(
        favorites.filter(
          (item) => item.idMeal !== recipe.idMeal
        )
      );
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        favorites,
        toggleFavorite,
        categories,
        ingredients,
        loading,
        ingredient,
        category,
        search,
        setIngredient,
        setCategory,
        setSearch,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipeContext);