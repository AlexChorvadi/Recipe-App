import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { recipes, loading, favorites } = useRecipes();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-black">
            Find Your Next
            <span className="text-orange-500"> Favorite Meal</span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg">
            Discover recipes from around the world.
          </p>

          <SearchBar />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Recipes
          </h2>

          <Link
            to="/favorites"
            className="bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-xl transition"
          >
            ❤️ {favorites.length} Favorites
          </Link>
        </div>
        {loading ? (
          <h2 className="text-center text-xl">Loading...</h2>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recipes.map((recipe) => (
              < RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            ))}
          </div>
        )}
        {
          recipes.length === 0 && !loading && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold">
                No recipes found
              </h2>
              <p className="text-zinc-400 mt-2">
                Try a different search term.
              </p>
            </div>
          )
        }
      </section>
    </div>
  );
};

export default Home;