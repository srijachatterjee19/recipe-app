import { configureStore, combineReducers } from 'redux';
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';

const reducers = {
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer
}

export const store = configureStore(combineReducers(reducers))
