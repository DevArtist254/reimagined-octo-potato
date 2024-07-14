import View from "./View";
import preView from "./preView";

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Please try again :)';
    _message = '';

    _generateMarkup() {
        return this._data.map(result => preView.render(result, false)).join('');
    }
}

export default new ResultsView();