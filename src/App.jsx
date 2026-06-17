import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import { RecipeProvider } from "./context/RecipeContext";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";

function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetails />}
        />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </RecipeProvider>
  );
}

export default App;