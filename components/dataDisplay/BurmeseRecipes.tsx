import { Recipe } from '@/features/receipes-api-slice';
import RecipesCard from './RecipesCard';

interface BurmeseRecipesProps {
  data: Recipe[];
}

const BurmeseRecipes = ({ data }: BurmeseRecipesProps) => {
  return (
    <section className="card-container">
      <div className="card-display">
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
