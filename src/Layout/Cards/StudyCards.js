import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function StudyCards({ cards = [], deck }) {
    //state for the current card
    const [ currentCard, setCurrentCard ] = useState(0);
    //state for determining which sid eof card is rendered
    const [ cardFront, setCardFront ] = useState(true)
    const history = useHistory();

    // handler for flip button
    function flipBtnHandler(event) {
        // pressing it switchs the booleon state to false
        setCardFront(!cardFront)
    }

    // handler for the next button
    function nextBtnHandler(event) {
        //currentCard is set at 0, adds 1 then sees if its less then the amout of cards in the deck
        if (currentCard + 1 < cards.length) {
            //adds one to the durrent card to go to the next card
            setCurrentCard(currentCard + 1);
            //sets the card to the front. 
            setCardFront(!cardFront);
        } else {
            // restart msg
            const restart = window.confirm("Restart cards\n \nClick 'cancel' to return to the home page?");
            if (restart) {
                 //if oaky is selected restarts the cards array to 0 and flips the card to the front one again.
                setCurrentCard(0);
                setCardFront(true);
            } else {
                //if they hit cancel it will return them to home
                history.push("/");
            }
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <h4>{`Card ${currentCard + 1} of ${cards.length}`}</h4>
                </div>
                <div>
                    <p>{
                    //loads the front or back depending on cardFron is true or false
                    cardFront ? 
                    (
                    //front
                    `${cards[currentCard].front}`   
                    ) 
                    : 
                    (
                    //back
                    `${cards[currentCard].back}`
                    )}
                    </p>
                </div>
                <div>
                    <button onClick={(event) => {
                        //links button to handler
                        flipBtnHandler(event)
                        }} 
                        className="btn btn-secondary mr-1">
                            Flip
                        </button>
                    {
                    //if on back side of card render the button
                    !cardFront && <button onClick={(event) => {
                        //links button to handler
                        nextBtnHandler(event)
                        }} 
                        className="btn btn-primary ml-1">
                            Next
                        </button>}
                </div>
            </div>

        </div>
    );
}