import React from "react";
import CardItem from "./CardItem";

export default function CardsList({ deckId, cards = [] }) {
    // goes through cards and useing map creates new card item for each card

    const listItems = cards.map((card) => {
        //console.log(card.id)
        return (
    <CardItem key={`${deckId}${card.id}`} card={card} />
    )
    })

    // displays an unordered list of the cards
    return (
        <ul
        //list-unsyled to remove bullet points
        className="list-unstyled">
            {listItems}
        </ul>
    );
};