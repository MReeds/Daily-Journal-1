const makeJournalEntryComponent = (journalEntry) => {
    return `
    <section class="journal-entries">
        <div>
            <h1>${journalEntry.concepts}</h1>
            <section>${journalEntry.contents}</section>
            <section>${journalEntry.mood}!</section>
            <aside>${journalEntry.date}</aside>
        </div>
    </section>
    `
};

export default makeJournalEntryComponent