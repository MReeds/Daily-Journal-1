const journalCardBuilderObj = {

    makeJournalEntryComponent: (journalEntry) => {
        return `
        <section class="journal-entries--${journalEntry.id}">
        <div>
        <h1>${journalEntry.concepts}</h1>
        <aside>${journalEntry.date}</aside>
        <section>${journalEntry.contents}</section>
        <section>${journalEntry.mood}!</section>
        </div>
        <button id="editEntry--${journalEntry.id}">Edit Entry</button>
        <button id="deleteEntry--${journalEntry.id}" class="deleteBtn">
        Delete
        </button>
        </section>
        `
    }

}

//Make sure to call the object and method because I wrapped this method in an object!!

export default journalCardBuilderObj

/*

*/