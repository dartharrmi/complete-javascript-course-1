import Search from './modules/Search'
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
        await state.search.getResults();

        // Show the recipes
        hideLoader();
        searchView.renderResult(state.search.result);
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