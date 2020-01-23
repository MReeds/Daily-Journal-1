const getEntries = () => {
    const journalAPI = "http://localhost:3000/journalEntries";
    fetch(journalAPI)
    .then(resp => resp.json())
    .then(entries => {
        renderJournalEntries(entries)
    })};

    getEntries()