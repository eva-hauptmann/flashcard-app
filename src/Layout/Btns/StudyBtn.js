import React from "react";
import { Link } from "react-router-dom";

export default function StudyBtn({ deckId }) {
    // creates a button to take the user to the study page
    return (
        <Link to={`/decks/${deckId}/study`} className="btn btn-primary">
            <span 
            //book symbol
            className="oi oi-book mr-1"></span>
            Study
        </Link>
    );
}