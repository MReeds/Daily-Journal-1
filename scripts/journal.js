import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

const getEntries = () => {
    const journalAPI = "http://localhost:3000/journalEntries";
    fetch(journalAPI)
    .then(resp => resp.json())
    .then(entries => {
        renderJournalEntries(entries)
    })};

const button = document.getElementById("record-button");

button.addEventListener("click", () => {
    // console.log("button has been clicked")
    const journalDate = document.querySelector("#journalDate").value;
    const journalConcepts = document.querySelector("#concepts").value;
    const journalEntry = document.querySelector("#entry").value;
    const journalMood = document.querySelector("#mood").value
    console.log(journalDate, journalConcepts, journalEntry, journalMood)
    
    if(journalDate && journalConcepts && journalEntry && journalMood){
console.log("Thanks for filling out your journal!")
    } else{
    console.log("Please, fill it out!")
    }
})

const journalEntryFactory = (date, concepts, entry, mood) => {
    return {
        date: date,
        concepts: concepts,
        entry: entry,
        mood: mood
    }
}

    getEntries();

API.getJournalEntries().then(renderJournalEntries)

/* When the user clicks the button, 
you need to create a new entry in your API. 
The HTTP method that you use to create resources is POST. Guidance on syntax is provided below.
*/

// const button = document.getElementById("search-btn");

// button.addEventListener("click", () => {


//   const input = document.getElementById("search-criteria");
//   const searchCriteria = input.value;
//   const searchResultPromise = apiManager.searchBusStops(searchCriteria);
//   searchResultPromise.then(searchResults => {
//     searchResultsDomManager.renderSearchResults(searchResults);