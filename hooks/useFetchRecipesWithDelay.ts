import { useEffect, useState } from 'react';
import { useFetchRecipesQuery } from "@/features/receipes-api-slice";
import { Recipe } from "@/features/receipes-api-slice";

const useFetchRecipesWithDelay = (delay: number = 1500) => {
  const { data, error, isFetching } = useFetchRecipesQuery();
  const [delayedData, setDelayedData] = useState<Recipe[]>([]);
  const [delayedFetching, setDelayedFetching] = useState(true);

  useEffect(() => {
    if (data) {
      setDelayedFetching(true);
      setTimeout(() => {
        setDelayedData(data);
        setDelayedFetching(false);
      }, delay);
    }
  }, [data, delay]);

  return { data: delayedData, error, isFetching: delayedFetching };
};

export default useFetchRecipesWithDelay;
