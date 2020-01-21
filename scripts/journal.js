const journalEntries = [
    {
        date: "January 16, 2020",
        concepts: "Objects and for loops",
        contents: "Learning JavaScript is proving to be a challenge.",
        mood: "Angry"
    },
    {
        date: "January 8, 2020",
        concepts: "CSS specificity",
        contents: "Selecting elements by their classes",
        mood: "Happy"
    },
    {
        date: "January 13, 2020",
        concepts: "Git Workflow",
        contents: "Everything you need to know about the order of the git work flow.",
        mood: "confused"
    },
    {
        date: "January 21, 2020",
        concepts: "API",
        contents: "Application Programmer Interface",
        mood: "Sad"
    }

]

const makeJournalEntryComponent = (journalEntry) => {
    return `
        <div>
            <h1>${journalEntry.concepts}</h1>
            <section>${journalEntry.contents}</section>
            <aside>${journalEntry.date}</aside>
        </div>
    `
};

const entryContainer = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        const journalEntry = entries[i];
        entryContainer.innerHTML += makeJournalEntryComponent(
        journalEntry
    )
}
}

renderJournalEntries(journalEntries);
// it works!!