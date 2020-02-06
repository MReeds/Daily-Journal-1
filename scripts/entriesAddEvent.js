import apiActions from "./data.js";
import domOperations from "./entriesDOM.js"


let eventManager = {

    buttonFunction: () => {

        let button = document.getElementById("record-button");

        button.addEventListener("click", () => {
            // console.log("button has been clicked")
            const journalDate = document.querySelector("#journalDate").value;
            const journalConcepts = document.querySelector("#concepts").value;
            const journalEntry = document.querySelector("#contents").value;
            const journalMood = document.querySelector("#mood").value
            // console.log(journalDate, journalConcepts, journalEntry, journalMood)

            const journalEntryObject = domOperations.journalEntryFactory(journalDate, journalConcepts, journalEntry, journalMood)

            if (journalDate && journalConcepts && journalEntry && journalMood) {
                console.log("Thanks for filling out your journal!")
                apiActions.saveJournalEntry(journalEntryObject).then(apiActions.getEntries).then(domOperations.renderJournalEntries)
            } else {
                alert("Please fill out the form.")
                console.log("Please, fill it out!")
            };
        })

    },
        entryDeleteEventListener: () => {
            const entryContainer = document.querySelector(".entryLog");

            entryContainer.addEventListener("click", (event) => {
                console.log("been clicked")
                if (event.target.id.startsWith("deleteEntry--")) {
                    const deleteBtnId = event.target.id;
                    const deleteBtnArray = deleteBtnId.split("--");
                    const entryToDelete = deleteBtnArray[1];

                    apiActions.deleteJournalEntry(entryToDelete)
                        .then(apiActions.getEntries)
                        .then(domOperations.renderJournalEntries)
                }
            })
        }
    
};
export default eventManager

/*
recipeDeleteEventListener: () => {
    recipeList.addEventListener("click", (event) => {
        if (event.target.id.startsWith("deleteRecipe--")) {
            const deleteBtnId = event.target.id;
            const deleteBtnArray = deleteBtnId.split("--");
            const recipeIdToDelete = deleteBtnArray[1];

            const recipeId = event.target.id.split("--")[1]

            apiActions.deleteRecipe(recipeIdToDelete)
                .then(apiActions.getAllRecipes)
                .then(renderRecipes);
        } else if (event.target.id.startsWith("editRecipe--")) {
            const recipeIdToEdit = event.target.id.split("--")[1]*/

/*
    This function will get the recipe from the API
    and populate the form fields (see below)
*/
/*
            updateFormFields(recipeIdToEdit)
        }
    })
}
}*/






































// import ApiActions from "./data.js";

// const addEntryEventListener = () => {

// const button = document.getElementById("record-button");

// button.addEventListener("click", () => {
//     // console.log("button has been clicked")
//     const journalDate = document.querySelector("#journalDate").value;
//     const journalConcepts = document.querySelector("#concepts").value;
//     const journalEntry = document.querySelector("#contents").value;
//     const journalMood = document.querySelector("#mood").value
//     // console.log(journalDate, journalConcepts, journalEntry, journalMood)

//     const journalEntryObject = journalEntryFactory(journalDate, journalConcepts, journalEntry, journalMood)


//     if(journalDate && journalConcepts && journalEntry && journalMood){
//         console.log("Thanks for filling out your journal!")
//         ApiActions.saveJournalEntry(journalEntryObject)
//     } else{
//         console.log("Please, fill it out!")
//     };
// });
// };

// const journalEntryFactory = (date, concepts, contents, mood) => {
//     return {
//         date: date,
//         concepts: concepts,
//         contents: contents,
//         mood: mood
//     }
// }

// export default addEntryEventListener