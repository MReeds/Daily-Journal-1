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