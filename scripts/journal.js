import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

const getEntries = () => {
    const journalAPI = "http://localhost:3000/journalEntries";
    fetch(journalAPI)
    .then(resp => resp.json())
    .then(entries => {
        renderJournalEntries(entries)
    })};

    getEntries();

API.getJournalEntries().then(renderJournalEntries)


/*Which of your Javascript modules contains the main logic? 
In this application, the src/scripts/journal.js is where execution starts. 
Remove all other script tags from index.html so that it only has a 
single script tag for journal.js.

The other three modules (data.js, entriesDOM.js and entryComponent.js) 
have methods that are being used outside the scope of the module. 
So add export statements to these modules.

Add import statements at the top the appropriate modules 
so that each module is importing any module it needs.*/