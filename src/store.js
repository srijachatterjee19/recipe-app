import allRecipesData from './data.js';
import { configureStore } from 'redux';

const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ''
};

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

const recipesReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'allRecipes/loadData':
        return { 
          ...state,
          allRecipes: action.payload
        }
      case 'searchTerm/clearSearchTerm':
        return {
          ...state,
          searchTerm: ''
        }
      
      case 'searchTerm/setSearchTerm':
        return {
          ...state,
          searchTerm: action.payload
        }
  
      case 'favoriteRecipes/addRecipe':
        return {
          ...state,
          favoriteRecipes: [...state.favoriteRecipes,action.payload ]
        }
  
      case 'favoriteRecipes/removeRecipe':
        return {
          ...state,
          favoriteRecipes: state.favoriteRecipes.filter(element => element.id !== action.payload.id)
        }
  
      default:
        return state;
    }
  };
  
  export const store = configureStore(recipesReducer);