import Search from './modules/Search'
import Recipe from './modules/Recipe'
import * as searchView from './views/searchView';
import { elements, renderLoader, hideLoader } from './views/base';

/**
 * Global state of the app
 * 
 * - Search object
 * - Current recipe object
 * - Shopping list.
 * - Liked recipes
 */
const state = {}

//#region Search
const controlSearch = async () => {
    // Gets the query from the view
    const query = searchView.getInput();

    if (query) {
        // New search object and add it to state
        state.search = new Search(query);

        // Prepare the UI
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // Search
        try {
            await state.search.getResults();

            // Show the recipes
            hideLoader();
            searchView.renderResult(state.search.result);
        } catch (exception) {
            alert('Something went wrong with the search...');
        }
    }
};
elements.searchForm.addEventListener('submit', e => {
    // Prevents the page from reloading when submitting the form.
    e.preventDefault();
    controlSearch();
});
elements.searchResPages.addEventListener('click', e => {
    const button = e.target.closest('.btn-inline');
    if (button) {
        const goToPage = parseInt(button.dataset.goto);
        searchView.clearResults();
        searchView.renderResult(state.search.result, goToPage);
    }
});
//#endregion

//#region Recipe
const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    if (id) {
        state.recipe = new Recipe(id);
        try {
            await state.recipe.getRecipe();
            state.recipe.calculateTime();
            state.recipe.calculateServings();
            console.log(state.recipe);
        } catch (exception) {
            alert('Error procesing the recipe');
        }
    }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe)
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
//#endregion