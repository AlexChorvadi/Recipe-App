import { useRecipes } from "../context/RecipeContext";

const SearchBar = () => {
  const {
    search,
    setSearch,
    ingredient,
    setIngredient,
    categories,
    ingredients,
    category,
    setCategory,
  } = useRecipes();

  return (
    <div className="mt-10 bg-zinc-900 p-4 rounded-3xl border border-zinc-800">

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Search recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-zinc-800 p-3 rounded-xl outline-none"
        />

        <select
          value={ingredient}
          onChange={(e) => {
            setIngredient(e.target.value);

            if (category) {
              setCategory("");
            }
          }}

          className="bg-zinc-800 p-3 rounded-xl"
        >
          <option value="">All Ingredients</option>
          {ingredients.map((ing) => (
            <option
              key={ing.idIngredient}
              value={ing.strIngredient}
            >
              {ing.strIngredient}
            </option>
          ))}
        </select>

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);

            if (ingredient) {
              setIngredient("");
            }
          }}
          className="bg-zinc-800 p-3 rounded-xl"
        >
          <option value="">All Categories</option>

          {categories.map((cat) => (
            <option
              key={cat.idCategory}
              value={cat.strCategory}
            >
              {cat.strCategory}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
};

export default SearchBar;