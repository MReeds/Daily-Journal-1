import renderJournalEntries from "./entriesDOM.js"

const baseUrl = "http://localhost:8088";

// const getEntries = () => {
//     const journalAPI = "http://localhost:8088/journalEntries";
//     fetch(journalAPI)
//     .then(resp => resp.json())
//     .then(entries => {
//         renderJournalEntries(entries)
//     })};

export default {
    getEntries() {
        return fetch(`${baseUrl}/journalEntries`)
            .then(response => response.json())
            .then(entries => {
                renderJournalEntries(entries)
            });
    },
    saveJournalEntry(journalEntryObject) {
        return fetch(`${baseUrl}/journalEntries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntryObject)
        }) .then(response => response.json())
    }
};
// const getEntries = () => {
//     const journalAPI = "http://localhost:8088/journalEntries";
//     fetch(journalAPI)
//     .then(resp => resp.json())
//     .then(entries => {
//         renderJournalEntries(entries)
//     })};