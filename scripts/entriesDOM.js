import makeJournalEntryComponent from "./entryComponent.js"

const entryContainer = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        const journalEntry = entries[i];
        entryContainer.innerHTML += makeJournalEntryComponent(
        journalEntry
    )
}
}

export default renderJournalEntries