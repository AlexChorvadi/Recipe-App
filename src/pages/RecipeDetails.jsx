import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const { recipes, loading } = useRecipes();

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .then((res) => {
        setMeal(res.data.meals[0]);
      });
  }, [id]);

  if (!meal) {
    return (
      <div className="bg-zinc-950 min-h-screen p-6 animate-pulse">
        <div className="max-w-6xl mx-auto">

          <div className="w-full h-[500px] rounded-3xl bg-zinc-800"></div>

          <div className="h-12 w-96 bg-zinc-800 rounded mt-8"></div>

          <div className="flex gap-4 mt-6">
            <div className="h-10 w-24 bg-zinc-800 rounded-full"></div>
            <div className="h-10 w-24 bg-zinc-800 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }

  const youtubeId = meal.strYoutube?.split("v=")[1];

  return (
    <div className="bg-zinc-950 min-h-screen text-white p-6">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition"
        >
          ← Back to Recipes
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">

        <div className="relative">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-[500px] object-cover rounded-3xl"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent rounded-3xl" />

          <div className="absolute bottom-8 left-8">
            <h1 className="text-5xl font-black">
              {meal.strMeal}
            </h1>

            <div className="flex gap-3 mt-4">
              <span className="bg-orange-500 px-4 py-2 rounded-full">
                {meal.strCategory}
              </span>

              <span className="bg-zinc-900/80 px-4 py-2 rounded-full">
                🌍 {meal.strArea}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">
            Ingredients
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-4 rounded-xl flex items-center gap-4"
              >
                <img
                  src={`https://www.themealdb.com/images/ingredients/${item.ingredient}.png`}
                  alt={item.ingredient}
                  className="w-12 h-12"
                />

                <div>
                  <h4>{item.ingredient}</h4>
                  <p className="text-zinc-400">
                    {item.measure}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">
            Instructions
          </h2>
          <p className="mt-8 text-zinc-300 leading-8">
            {meal.strInstructions}
          </p>
        </div>

        <div className="mt-10">
          {
            youtubeId && (
              <div className="mt-14">

                <h2 className="text-3xl font-bold mb-6">
                  Watch Recipe Video
                </h2>

                <div className="overflow-hidden rounded-3xl border border-zinc-800">

                  <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title="Recipe Video"
                    allowFullScreen
                  />

                </div>

              </div>
            )
          }
        </div>
      </div>

    </div>
  );
};

export default RecipeDetails;