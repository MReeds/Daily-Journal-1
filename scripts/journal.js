import renderJournalEntries from "./entriesDOM.js";
import ApiActions from "./data.js";

const getEntries = () => {
    const journalAPI = "http://localhost:8088/journalEntries";
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
    const journalEntry = document.querySelector("#contents").value;
    const journalMood = document.querySelector("#mood").value
    // console.log(journalDate, journalConcepts, journalEntry, journalMood)
    
    const journalEntryObject = journalEntryFactory(journalDate, journalConcepts, journalEntry, journalMood)

    
    if(journalDate && journalConcepts && journalEntry && journalMood){
        console.log("Thanks for filling out your journal!")
        ApiActions.saveJournalEntry(journalEntryObject).then(getEntries)
    } else{
        alert("Please fill out the form.")
        console.log("Please, fill it out!")
    };
})

// saveJournalEntry(journalEntryObject).then(ApiActions.getJournalEntries()).then(renderJournalEntries())
const journalEntryFactory = (date, concepts, contents, mood) => {
    return {
        date: date,
        concepts: concepts,
        contents: contents,
        mood: mood
    }
}


// const postJournalEntry = (journalEntryObject) => {
//     fetch("http://localhost:8088/journalEntries", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(journalEntryObject)
// })}

getEntries();
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