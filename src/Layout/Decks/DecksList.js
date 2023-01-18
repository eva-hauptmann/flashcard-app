import React from "react";
import DeckItem from "./DeckItem";

export default function DecksList({ decks, deckId }) {
    // iterate throught the deck's cards array to create deckItem for each
    const listItems = decks.map((deck) =>  {
        console.log(deck.id)
        return (<DeckItem key={deck.id} deck={deck} />)});
    // returns an unordered list of the DeckItems
    return (
        <ul className="list-unstyled">
            {listItems}
        </ul>
    );
};