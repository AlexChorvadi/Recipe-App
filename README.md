# Recipe Finder 🍽️

A modern recipe discovery application built with React, React Router, Context API, Axios, and Tailwind CSS.

Users can browse recipes, search meals, filter by category or ingredient, view detailed recipe information, watch cooking videos, and save favorite recipes.

## Features

* Browse recipes from TheMealDB API
* Search recipes by name
* Filter recipes by category
* Filter recipes by ingredient
* View detailed recipe information
* See ingredients and measurements
* Watch recipe videos from YouTube
* Save recipes to favorites
* Favorites persist using localStorage
* Responsive design for desktop and mobile
* React Context API for global state management

## Tech Stack

* React
* React Router DOM
* Context API
* Axios
* Tailwind CSS
* TheMealDB API

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project folder:

```bash
cd recipe-finder
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## API Used

The project uses TheMealDB public API:

https://www.themealdb.com/api.php

### Endpoints Used

Get recipes by ingredient:

```txt
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken
```

Get recipes by category:

```txt
https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
```

Get recipe details:

```txt
https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
```

Get all categories:

```txt
https://www.themealdb.com/api/json/v1/1/categories.php
```

Get all ingredients:

```txt
https://www.themealdb.com/api/json/v1/1/list.php?i=list
```

## Project Structure

```txt
src
├── components
│   ├── RecipeCard.jsx
│   ├── SearchBar.jsx
│
├── context
│   └── RecipeContext.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Favorites.jsx
│   └── RecipeDetails.jsx
│
├── App.jsx
└── main.jsx
```

## Notes

* The free version of TheMealDB does not support combining ingredient and category filters in a single request.
* To provide a better user experience, selecting one filter automatically clears the other.
* Favorite recipes are stored in localStorage and remain available after page refresh.

## Future Improvements

* Pagination or infinite scrolling
* Dark/Light mode
* Recipe sharing
* Advanced filtering
* User authentication
* Meal planning feature

## Author

Krushi
