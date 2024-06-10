# Burmese Recipes App
![Home Page](/public/BRA_SS.png)

## Tech Stacks

- Next JS (App Router)
- Redux Toolkit and RTK Query
- Ant Design & Tailwind

## Features

### User Type

> User can choose whether he or she is vegan or meat eater. Default is displaying all recipes. 

### Search
> User can search the desired recipes and look cooking instructions.

### Infinite Scroll
> When user scroll and reach to the end of the page, it automatically refetch more data and show them to user.

## I learn these things from this project

- Redux toolkit is used to write the global state management with mutation concepts which is not allowed in redux core.
- RTK Query can be used to fetch and cach data in the store
- With Redux, View and Data Layers can be separated. With redux, data can be managed through dispatch and actions within the data layers.

## My Application Flow

- During the initial rendering process, `useFetchRecipesQuery` function, supported by RTK query is called to fetch all recipes data from the api.
- The fetched recipes data is stored inside the redux store
- We can make the side effects through actions. Dispatch funcitons are called to trigger these actions.
- Each single recipe data can be get through `useFetchRecipeBySlugQuery(slug)` which is used to fetch dynamic recipe data through URL params

---
Special Thanks for Ko Sann Lynn Htun's for the project idea

