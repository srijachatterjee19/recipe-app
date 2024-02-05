import allRecipesData from './data.js';
import { configureStore } from 'redux';


/*

    Action Creators

*/

// Dispatched when the user types in the search input.
// Sends the search term to the store.
export const setSearchTerm = (term) => {
  return { 
    type: 'searchTerm/setSearchTerm', 
    payload: term 
  };
}

// Dispatched when the user presses the clear search button.
export const clearSearchTerm = () => {
  return { 
    type: 'searchTerm/clearSearchTerm' 
  };
}

// Dispatched when the user first opens the application.
// Sends the allRecipesData array to the store.
export const loadData = () => {
  return {type:'allRecipes/loadData', payload: allRecipesData};

}

// Dispatched when the user clicks on the heart icon of 
// a recipe in the "All Recipes" section.
// Sends the recipe object to the store.
export const addRecipe = (recipe) => {
  return {type: 'favoriteRecipes/addRecipe',payload: recipe};
}

// Dispatched when the user clicks on the broken heart 
// icon of a recipe in the "Favorite Recipes" section.
// Sends the recipe object to the store.
export const removeRecipe = (recipe) => {
  return {type: 'favoriteRecipes/removeRecipe',payload: recipe };
}

/*

    Reducers seperated

*/

const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch(action.type) {
    case 'allRecipes/loadData':
      return action.payload
    default:
      return allRecipes;
  }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch(action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default: 
      return searchTerm;
  }
}
const initialFavoriteRecipes = [];
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
  switch(action.type) {
    case 'favoriteRecipes/addRecipe':
      return  [...favoriteRecipes,action.payload];
    case 'favoriteRecipes/removeRecipe':
      return favoriteRecipes.filter(element => element.id !== action.payload.id);
    default: 
      return favoriteRecipes;
  }
}


const rootReducer = (state = {}, action) => {
    const nextState = {
      allRecipes: allRecipesReducer(state.allRecipes, action),
      searchTerm: searchTermReducer(state.searchTerm, action),
      favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action)
    } 
    return nextState;
  }

  export const store = configureStore(rootReducer);