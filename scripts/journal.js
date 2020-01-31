import API from "./data.js"
import renderJournalEntries from "./entriesDOM"

const getEntries = () => {
    const journalAPI = "http://localhost:3000/journalEntries";
    fetch(journalAPI)
    .then(resp => resp.json())
    .then(entries => {
        renderJournalEntries(entries)
    })};

    getEntries();

API.getJournalEntries().then(renderJournalEntries)

export default getEntries
/*
The other three modules (data.js, entriesDOM.js and entryComponent.js) 
have methods that are being used outside the scope of the module. 
So add export statements to these modules.

Add import statements at the top the appropriate modules 
so that each module is importing any module it needs.*/
