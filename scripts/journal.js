import saveEntryBtn from "./saveEntryBtn.js"
import apiActions from "./data.js";
import events from "./entriesAddEvent.js"
import domOperations from "./entriesDOM.js";
import radioButtonManager from "./buttonEvent.js";
import keyPressListener from "./keyPressEvent.js"


apiActions.getEntries()
    .then(domOperations.renderJournalEntries)
saveEntryBtn.buttonFunction();
radioButtonManager.radioBtnFunction()
events.entryDeleteEventListener()
keyPressListener.keyPressFunction()
