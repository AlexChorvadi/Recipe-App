import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useRecipes();

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-black">
              Your Favorites ❤️
            </h1>

            <p className="text-zinc-400 mt-2">
              {favorites.length} saved recipes
            </p>
          </div>

          <Link
            to="/"
            className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            ← Back Home
          </Link>

        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-20">

            <h2 className="text-2xl font-bold">
              No favorites yet
            </h2>

            <p className="text-zinc-400 mt-2">
              Start saving recipes you love.
            </p>

          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {favorites.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default Favorites;