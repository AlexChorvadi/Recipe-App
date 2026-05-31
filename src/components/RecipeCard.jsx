import { Link } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const { favorites, toggleFavorite } = useRecipes();

  const isFavorite = favorites.some(
    (item) => item.idMeal === recipe.idMeal
  );

  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition">

        <div className="relative overflow-hidden">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(recipe);
            }}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:scale-110 transition"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500 text-lg" />
            ) : (
              <FaRegHeart className="text-white text-lg" />
            )}
          </button>
        </div>

        <div className="p-4">
          <h2 className="font-bold text-lg">
            {recipe.strMeal}
          </h2>

          <p className="text-zinc-400 text-sm mt-2">
            {recipe.strArea || "International"}
          </p>
        </div>

      </div>
    </Link>
  );
};

export default RecipeCard;