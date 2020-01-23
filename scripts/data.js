const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/journalEntries")
            .then(response => response.json())
    }
}