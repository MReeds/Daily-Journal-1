const entryContainer = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    const newArray = entries.reverse()
    entryContainer.innerHTML = '';
    newArray.forEach(entry => {
        entryContainer.innerHTML += `
        <section class="journal-entries">
            <div>
                <h1>${entry.concepts}</h1>
                <section>${entry.contents}</section>
                <section>${entry.mood}!</section>
                <aside>${entry.date}</aside>
            </div>
        </section>
        `
    });
}


export default renderJournalEntries;