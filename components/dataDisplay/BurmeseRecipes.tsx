import { Recipe } from '@/features/receipes-api-slice';
import RecipesCard from './RecipesCard';

interface BurmeseRecipesProps {
  data: Recipe[];
}

const BurmeseRecipes = ({ data }: BurmeseRecipesProps) => {
  return (
    <section className="container mt-4">
      <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map((recipe) => (
          <RecipesCard
            key={recipe.Guid}
            img={`/img/${recipe.Name}.jpg`}
            name={recipe.Name}
            type={recipe.UserType}
            slug={recipe.Guid}
          />
        ))}
      </div>
    </section>
  );
};

export default BurmeseRecipes;
