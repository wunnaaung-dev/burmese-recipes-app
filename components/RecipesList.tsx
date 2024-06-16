'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useFetchRecipesQuery } from '@/features/receipes-api-slice';
import RecipesCard from './dataDisplay/RecipesCard';
import Loading from './loading/Loading';
import { Recipe } from '@/features/receipes-api-slice';
import Spinner from './loading/Spinner';
import { useAppSelector } from '@/hooks/hooks';

const RecipesList: React.FC = () => {
  const { data, isFetching, error } = useFetchRecipesQuery();
  const [displayCount, setDisplayCount] = useState<number>(20);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement | null>(null);
  
  const filtersState = useAppSelector(state => state.filters);
  const searchState = useAppSelector(state => state.search);
  const filterValue = filtersState.selectedCategory;
  const searchValue = searchState.searchValue.toLowerCase();

  const loadMore = useCallback(() => {
    if (isLoadingMore || !data) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      setDisplayCount(prevCount => Math.min(prevCount + 20, data.length));
      setIsLoadingMore(false);
    }, 1000);
  }, [isLoadingMore, data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const target = entries[0];
        if (target.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadMore]);

  useEffect(() => {
    if (displayCount >= (data?.length ?? 0)) {
      if (observerRef.current) {
        const observer = new IntersectionObserver(() => {});
        observer.unobserve(observerRef.current);
      }
    }
  }, [displayCount, data]);

  let filteredData: Recipe[] = [];

  if (data) {
    filteredData = data.filter(recipe => {
      const matchesFilter = filterValue === '000' || recipe.UserType === filterValue;
      const matchesSearch = recipe.Name.toLowerCase().includes(searchValue);
      return matchesFilter && matchesSearch;
    }).slice(0, displayCount);
  }

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isFetching && displayCount === 20 ? (
        <Loading />
      ) : data ? (
        <section className="container mt-4">
          {filteredData.length === 0 ? (
            <div className="text-center text-red-500 mt-4 h-screen">No recipes found.</div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
                {filteredData.map(recipe => (
                  <RecipesCard
                    key={recipe.Guid}
                    img={`/img/${recipe.Name}.jpg`}
                    name={recipe.Name}
                    type={recipe.UserType}
                    slug={recipe.Guid}
                  />
                ))}
              </div>
              {displayCount < data.length && (
                <div ref={observerRef}>
                  {isLoadingMore && <Spinner />}
                </div>
              )}
            </>
          )}
        </section>
      ) : null}
    </div>
  );
};

export default RecipesList;
