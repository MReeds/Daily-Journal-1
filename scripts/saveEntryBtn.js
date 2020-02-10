import apiActions from "./data.js";
import domOperations from "./entriesDOM.js"

const clearForm = () => {
    const entryIdInput = document.querySelector("#entryId");
    const entryDate = document.querySelector("#journalDate");
    const entryConcepts = document.querySelector("#concepts");
    const entryContents = document.querySelector("#contents");
    const entryMood = document.querySelector("#mood");

    entryIdInput.value = "";
    entryDate.value = "";
    entryConcepts.value = "";
    entryContents.value = "";
    entryMood.value = "";

}

let saveEntryBtn = {

    buttonFunction: () => {

        let button = document.getElementById("record-button");

        button.addEventListener("click", () => {
            const entryIdInput = document.querySelector("#entryId");
            const journalDate = document.querySelector("#journalDate").value;
            const journalConcepts = document.querySelector("#concepts").value;
            const journalEntry = document.querySelector("#contents").value;
            const journalMood = document.querySelector("#mood").value

            const journalEntryObject = domOperations.journalEntryFactory(journalDate, journalConcepts, journalEntry, journalMood)

            const entry = {
                date: journalDate,
                concepts: journalConcepts,
                contents: journalEntry,
                mood: journalMood
            }

            if (entryIdInput.value !== "") {
                entry.id = parseInt(entryIdInput.value);
                console.log(entryIdInput)
                apiActions.updateEntry(entry)
                    .then(apiActions.getEntries)
                    .then(domOperations.renderJournalEntries)
                    .then(clearForm)
            } else {
                apiActions.saveJournalEntry(journalEntryObject)
                    .then(() => {
                        apiActions.getEntries()
                            .then(domOperations.renderJournalEntries)
                            .then(clearForm)
                    })
            };
        })
    }
}

export default saveEntryBtn