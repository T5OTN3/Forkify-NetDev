import Search from './models/Search';
import { clearLoader, elements, renderLoader } from './views/base';
import * as searchView from './views/searchView';


const state = {};
window.state = state;


const controlSearch = async () => {

    const query = searchView.getInput();

    if(query){

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResList);

        state.search = new Search(query);
        await state.search.getResults()

        clearLoader();
        searchView.renderResult(state.search.result)
    }

}


elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
})


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if(btn){
        const goToPage = +btn.dataset.goto;
        searchView.clearResults();
        searchView.renderResult(state.search.result, goToPage);
    }

});
