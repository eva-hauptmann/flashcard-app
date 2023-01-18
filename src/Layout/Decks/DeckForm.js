import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";

export default function DeckForm({ deck , edit }) {
    // declares states and setState functions
    const [ deckName, setDeckName ] = useState("");
    const [ description, setDescription ] = useState("");
    const history = useHistory();

  
    useEffect(() => {
        if (edit) {
            //sets the name and description when editing
            setDeckName(deck.name);
            setDescription(deck.description);
        } //updates on name or description change, or from the edit dependecie
    }, [deck.name, deck.description, edit])

    // if creating, creates an object to store the new data from inputs
    const newDeck = {
        name: deckName,
        description: description,
    };

    // if editing, creates an object containg the deck's current information
    const deckUpdate = {
        id: deck.id,
        name: deckName,
        description: description,
    };


    function handleCancelBtn() {
        //if editing and you hit cancel, reloads page
        if (edit) history.go(-1)
        //if creating a new deck and hit cancel, go back to home
        history.push("/")
    }

    // handlers for when the inputs are changed/updated
    const handleInputChange = (event) => setDeckName(event.target.value);
    const handleTextAreaChange = (event) => setDescription(event.target.value);

    
    async function handleSubmit(event) {
        event.preventDefault();
        if(!edit){
            //creating a deck with createDeck() function
            const response = await createDeck(newDeck);
            //goes to the newly created deck
            history.push(`/decks/${response.id}`);
        } else {
            //updateting a deck with updateDeck() function
            await updateDeck(deckUpdate);
            //goes back to the deck view
            history.go(-1);
        }
    }

    return (
        //renders the deck view
        <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="deckName">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="deckName" 
                            name="deckName"
                            value={deckName ?? ""}
                            //for updateing when the text is inputed
                            onChange={handleInputChange}
                            required={true}
                            placeholder={"Deck Name"}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea 
                            className="form-control" 
                            id="description" 
                            rows="4"
                            name="description"
                            value={description}
                            required={true}
                            onChange={handleTextAreaChange}
                            placeholder={"Brief description of the deck"}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleCancelBtn();
                        }}
                            className="btn btn-secondary mr-1">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary ml-1">
                            Submit
                        </button>
                    </div>
                </form>
    );
}