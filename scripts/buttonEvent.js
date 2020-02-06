import apiActions from "./data.js";
import domOperations from "./entriesDOM.js"

const radioButtonManager = {

    radioBtnFunction: () => {

        const radioButtons = document.getElementsByName("mood");

        radioButtons.forEach(button => {
            button.addEventListener("click", event => {
                const mood = event.target.value.toUpperCase()
                apiActions.getEntries()
                    .then(response => response.filter(response => {
                        const responseMood = response.mood.toUpperCase()
                        return responseMood === mood
                    })).then(domOperations.renderJournalEntries)
            });
        })
    }
};
export default radioButtonManager;

/*
*/