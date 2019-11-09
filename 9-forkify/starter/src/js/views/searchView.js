import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
    if (title.length > limit) {
        const newTitle = [];

        title.split(' ').reduce((accumulator, current) => {
            if (accumulator + current.length <= limit) {
                newTitle.push(current);
            }

            return accumulator + current.length;
        }, 0);

        return `${newTitle.join(' ')}...`;
    }

    return title;
}

const renderRecipe = recipe => {
    const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;

    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

export const renderResult = (recipes, page = 1, resultsPerPage = 10) => {
    const start = (page - 1) * resultsPerPage;
    const end = resultsPerPage * page;

    recipes.slice(start, end).forEach(el => renderRecipe(el));
    renderPagination(page, recipes.length, resultsPerPage);
}

const renderPagination = (page, numberOfResults, resultsPerPage) => {
    const pages = Math.ceil(numberOfResults / resultsPerPage);
    let button;

    if (page === 1 && pages > 1) {
        button = createPaginationButton(page, 'next');
    } else if (page < pages) {
        button = `
            ${createPaginationButton(page, 'prev')}
            ${createPaginationButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        button = createPaginationButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
}

const createPaginationButton = (numberOfPage, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? numberOfPage - 1 : numberOfPage + 1}>
        <span>Page ${type === 'prev' ? numberOfPage - 1 : numberOfPage + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;