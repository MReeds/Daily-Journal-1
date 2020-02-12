import apiActions from "./data.js"
import domOperations from "./entriesDOM.js"

const keyPressListener = {

    keyPressFunction: () => {
        const keyPress = document.querySelector(".search-box");

        keyPress.addEventListener("keypress", (event) => {
            if (event.keyCode === 13) {
                const searchedTerm = event.target.value.toUpperCase();
                apiActions.getEntries()
                    .then(response => response.filter(response => {
                        let filter = false;
                        for (const value of Object.values(response)) {
                            if (typeof value === "string") {
                                if (value.toUpperCase().includes(searchedTerm)) {
                                    filter = true;
                                }
                            }
                        }
                        return filter
                    })).then(domOperations.renderJournalEntries)
            }
        })
    }
}

export default keyPressListener