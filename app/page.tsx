import RecipesList from "@/components/RecipesList";
import ScrollToTop from "@/components/scroll/ScrollToTop";
import SearchRecipes from "@/components/search/SearchRecipes";
import SelectItems from "@/components/selectBox/SelectItems";

const Home = () => {
  return (
    <main id="top" className="relative mb-5">
      <div className="container flex justify-end gap-4 mt-4">
        <SearchRecipes />
        <SelectItems/>
      </div>
      <RecipesList />
      <ScrollToTop />
    </main>
  );
};

export default Home;
