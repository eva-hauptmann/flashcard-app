import React from "react";
import { Link, useParams } from "react-router-dom";

//rootName for the name set to loading so it never says undefined if device is slow, a bunch of booleans to switch the breadcfrumbs links out.
export default function Breadcrumb({ rootName = "loading", edit = false, isCard = false, cardId, study=false }) {
    // gets the deck id from url params
    const { deckId } = useParams();

    // creates a default list item
    let crumb = <li key={deckId} className="breadcrumb-item"><Link to="/"></Link></li>
    
    //these are the links for the breadcrumbs navigator bar
    if (study) {
        crumb = [
        <li 
        /*link to the parent? previous? (idk what you would call it) page*/
        key={deckId} className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>
        ,
        <li
        /*when the link is clicked it turns grey and you cant click it again*/
        key={`active-${deckId}`} className="breadcrumb-item active" aria-current="page">Study</li>
        ];
    } else if (edit && isCard) {
        // this is for the editing card page, does the same as above
        crumb = [
            <li  key={deckId} className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
            <li  key={`active-${deckId}`} className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
            ];
    } else if (!edit && isCard) {
        // same, but for adding a card
        crumb = [
            <li  key={deckId} className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
            <li  key={`active-${deckId}`} className="breadcrumb-item active" aria-current="page">Add Card</li>
            ];
    } else if (edit && !isCard) {
        //same, but for editing a deck
        crumb = [
            <li  key={deckId} className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
            <li  key={`active-${deckId}`} className="breadcrumb-item active" aria-current="page">Edit Deck</li>
            ];
    } else {
        // same but for, view deck and create deck
        crumb = <li key={deckId} className="breadcrumb-item active" aria-current="page">{`${rootName}`}</li>
    }

    return (
        <nav 
        // bootstrap breadcrumb navbarm, formats the ordered list 
        aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/"
                     // link to home page, so it always displays when breadcrumbs is loaded. 
                    >
                        <span 
                        // the home icon. 
                        className="oi oi-home mr-1"></span>
                        Home
                    </Link>
                </li >
                {/* where the rest of the links spawn*/}
                {crumb}
            </ol>
        </nav>
    );
}