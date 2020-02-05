import eventManager from "./entriesAddEvent.js"
import apiActions from "./data.js";
import domOperations from "./entriesDOM.js";

apiActions.getEntries()
.then(domOperations.renderJournalEntries)
eventManager.buttonFunction()





// post.then(get).then(render)












//   const input = document.getElementById("search-criteria");
//   const searchCriteria = input.value;
//   const searchResultPromise = apiManager.searchBusStops(searchCriteria);
//   searchResultPromise.then(searchResults => {
//     searchResultsDomManager.renderSearchResults(searchResults);