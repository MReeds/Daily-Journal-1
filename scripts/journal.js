import eventManager from "./entriesAddEvent.js"
import apiActions from "./data.js";
import domOperations from "./entriesDOM.js";
import radioButtonManager from "./buttonEvent.js"


apiActions.getEntries()
    .then(domOperations.renderJournalEntries)
eventManager.buttonFunction();
radioButtonManager.radioBtnFunction()
eventManager.entryDeleteEventListener()



/*
Once you have successfully retrieved the value of ok, happy, or sad
based on which radio button was clicked, you need to filter all of the journal entries. 
The most straightforward way of doing this is to invoke the getJournalEntries()
method on your data manager object - which will get all entries - and then use the filter() 
array method to extract only the entries that have the same mood as the one the user clicked on.*/