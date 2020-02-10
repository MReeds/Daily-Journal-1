import apiActions from "./data.js";
import domOperations from "./entriesDOM.js"

const editFormFields = entryId => {
    const hiddenEntryId = document.querySelector("#entryId");
    const entryDate = document.querySelector("#journalDate");
    const entryConcepts = document.querySelector("#concepts");
    const entryContents = document.querySelector("#contents");
    const entryMood = document.querySelector("#mood");

    // TODO: refactor this fetch call into the data file. Then look into the error that is resulting in the values being undefined
    return fetch(`http://localhost:8088/journalEntries/${entryId}`)
        .then(resp => resp.json())
        .then(entry => {
            hiddenEntryId.value = entry.id
            entryDate.value = entry.date
            entryConcepts.value = entry.concepts
            entryContents.value = entry.contents
            entryMood.value = entry.mood
        })
};

export default {

    entryDeleteEventListener: () => {
        const entryContainer = document.querySelector(".entryLog");

        entryContainer.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteEntry--")) {
                const deleteBtnId = event.target.id;
                const deleteBtnArray = deleteBtnId.split("--");
                const entryToDelete = deleteBtnArray[1];

                apiActions.deleteJournalEntry(entryToDelete)
                    .then(apiActions.getEntries)
                    .then(domOperations.renderJournalEntries)
            } else if (event.target.id.startsWith("editEntry--")) {
                const entryToEdit = event.target.id.split("--")[1]
                editFormFields(entryToEdit)
            }
        })
    }

}






































// import ApiActions from "./data.js";

// const addEntryEventListener = () => {

// const button = document.getElementById("record-button");

// button.addEventListener("click", () => {
//     // console.log("button has been clicked")
//     const journalDate = document.querySelector("#journalDate").value;
//     const journalConcepts = document.querySelector("#concepts").value;
//     const journalEntry = document.querySelector("#contents").value;
//     const journalMood = document.querySelector("#mood").value
//     // console.log(journalDate, journalConcepts, journalEntry, journalMood)

//     const journalEntryObject = journalEntryFactory(journalDate, journalConcepts, journalEntry, journalMood)


//     if(journalDate && journalConcepts && journalEntry && journalMood){
//         console.log("Thanks for filling out your journal!")
//         ApiActions.saveJournalEntry(journalEntryObject)
//     } else{
//         console.log("Please, fill it out!")
//     };
// });
// };

// const journalEntryFactory = (date, concepts, contents, mood) => {
//     return {
//         date: date,
//         concepts: concepts,
//         contents: contents,
//         mood: mood
//     }
// }

// export default addEntryEventListener