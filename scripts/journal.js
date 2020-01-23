const getEntries = () => {
    const journalAPI = "http://localhost:3000/journalEntries";
    fetch(journalAPI)
    .then(resp => resp.json())
    .then(entries => {
        renderJournalEntries(entries)
    })};

    getEntries();
    
    
    /*
    Now that you've defined an object whose responsibility is to access the data, 
    you need to write code in src/scripts/journal.js to use that object and get the data.
    Once you know you have the data, pass it along to the renderJournalEntries function that 
    now lives in src/scripts/entriesDom.js. 
    */
    /*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

API.getJournalEntries().then(renderJournalEntries)
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)