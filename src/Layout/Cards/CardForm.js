import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createCard, updateCard } from "../../utils/api";

export default function CardForm({ card, deckId, edit = false }) {
    // two states, one for the front and one for the back
    const [ cardFront, setcardFront ] = useState("");
    const [ cardBack, setCardBack ] = useState("");
    
    const history = useHistory();

    //sets the cards front and back text
    useEffect(() => {
        setcardFront(card.front);
        setCardBack(card.back);
        //updates whenever one of them changes
    }, [card.front, card.back])

    // the object used for seting up new card
    const newCard = {
        front: cardFront,
        back: cardBack,
    }

    // if editing, creates an object to store data from current card
    const cardUpdate = {
        id: card.id,
        front: cardFront,
        back: cardBack,
        deckId: deckId
    }
    
    // sends user back to Deck view when they click cancel
    function handleDoneCancelBtn() {
        history.go(-1);
    }

    // f
    const handleFrontChange = (event) => setcardFront(event.target.value);
    const handleBackChange = (event) => setCardBack(event.target.value);


    //function for when user hits save submit 
    async function handleSaveSubmit(event) {
        //stop page from refreshing
        event.preventDefault();
        if(!edit){
            //passes newCard object into createCard() function with the curent deckId to add the card to the deck
            await createCard(deckId, newCard);
            setcardFront("");
            setCardBack("");
        } else {
            //if you clicked edut then it will update the card with the inputed text instead
            await updateCard(cardUpdate);
            history.go(-1);
        }
        
    }

    return (
        <form onSubmit={handleSaveSubmit}>
                    <div className="form-group">
                        <label htmlFor="cardFront">Front</label>
                        <textarea 
                        //form for the front side of the card
                            type="text" 
                            className="form-control" 
                            id="cardFront" 
                            rows="2"
                            name="cardFront"
                            //the text is stored here, used later for study
                            value={cardFront}
                            onChange={handleFrontChange}
                            required={true}
                            placeholder="Front side of card">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardBack">Back</label>
                        <textarea 
                        //form for the back side of the card
                            className="form-control" 
                            id="cardBack" 
                            rows="2"
                            name="cardBack"
                            //the text is stored here, used later for study
                            value={cardBack}
                            onChange={handleBackChange}
                            required={true}
                            placeholder="Back side of card">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleDoneCancelBtn();
                        }}className="btn btn-secondary mr-1">
                            {edit ? 
                            //if edit
                            "Cancel" 
                            : 
                            //if new
                            "Done"
                            }
                            </button>
                        <button type="submit" className="btn btn-primary ml-1">
                            {edit ? 
                            //if edit
                            "Submit" 
                            : 
                            //if new
                            "Save"}
                            </button>
                    </div>
                </form>
    );
}