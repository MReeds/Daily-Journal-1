const baseUrl = "http://localhost:8088";
/* When the user clicks the button, 
you need to create a new entry in your API. 
The HTTP method that you use to create resources is POST. Guidance on syntax is provided below.
*/


//This Object called APIActions contains two methods that handle fetching data from my json database..
const apiActions = {
    getEntries: () => {
        return fetch(`${baseUrl}/journalEntries`)
            .then(response => response.json());

    },

    //This method saves journal entries to my jsondatabase
    saveJournalEntry: journalEntryObject => {
        return fetch(`${baseUrl}/journalEntries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntryObject)
        }).then(response => response.json());
    },

    deleteJournalEntry(journalEntryId){
        return fetch(`${baseUrl}/journalEntries/${journalEntryId}`, {
            method: "DELETE"
        });
    }
};

//     deleteJournalEntry: (object) => {

//         return fetch("")

//     },

//     updateJournalEntry: (id,object) => {

//         return fetch("")
//     }
// };

export default apiActions