import React from "react";
import { Link } from "react-router-dom";

export default function AddCardsBtn({ deckId }) {
    return (
        //sends the user to the new cards page useing the deckid, has the blue button style
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary ml-2">
            <span 
            //plus symbol
            className="oi oi-plus mr-1"></span>
            Add Cards
        </Link>
    );
}