import journalCardBuilder from "./entryComponent.js"

const entryContainer = document.querySelector(".entryLog");

const domOperations = {

    journalEntryFactory: (date, concepts, contents, mood) => {

        let newEntryObject = {
            date: date,
            concepts: concepts,
            contents: contents,
            mood: mood
        }

        return newEntryObject
    },



    renderJournalEntries: (entries) => {
        const newArray = entries.reverse()
        entryContainer.innerHTML = ''
        newArray.forEach(entry => {
            entryContainer.innerHTML +=
                journalCardBuilder.makeJournalEntryComponent(entry);
        });
    }

}

export default domOperations