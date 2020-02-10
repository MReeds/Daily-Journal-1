import saveEntryBtn from "./saveEntryBtn.js"
import apiActions from "./data.js";
import events from "./entriesAddEvent.js"
import domOperations from "./entriesDOM.js";
import radioButtonManager from "./buttonEvent.js"


apiActions.getEntries()
    .then(domOperations.renderJournalEntries)
saveEntryBtn.buttonFunction();
radioButtonManager.radioBtnFunction()
events.entryDeleteEventListener()




/*
Add edit button to journal entry -- done
Add hidden input field to form to store id value of edited entry -- done
Add event listener to button. Give unique id which includes id property of entry
When clicked, get the individual entry and populate the form fields with text content.
When user clicks the save button, determine if editing or creating (does hidden input field have a value?)
If editing, perform a PUT request to the API
Get all entries and display again*/