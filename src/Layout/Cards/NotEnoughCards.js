import React from "react";
import AddCardsBtn from "../Btns/AddCardsBtn";

export default function NotEnoughCards( { cards = [], deck = [] }) {
    // this is displayed if the deck has 2 cards or fewer 
    return (
        <div>
            <div>
                <h2>Not enough cards.</h2>
            </div>
            <div>
                <p>You need at least 3 cards to study. Ther are {cards.length} cards this deck.</p>
            </div>
            <div>
                <AddCardsBtn deckId={deck.id} />
            </div>
        </div>
    );
}