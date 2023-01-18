import React, { useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import DeckForm from "../Decks/DeckForm";
import { readDeck } from "../../utils/api";


export default function CreateEditDeck({ deck = "loading", setDeck, isDeck = true, edit = false }) {
    /* if editing, loads the deck based on id from deck view */
    useEffect(() => {
        if (edit) {
            async function loadDeck() {
                const deckFromAPI = await readDeck(deck.id);
                setDeck(deckFromAPI);
            };
            loadDeck();
        }
    }, [deck.id, setDeck, edit])
 
    /* if creating a deck, simply displays the following
    with the appropriate header */
    return (
        <div>
            <div>
                <Breadcrumb 
                rootName={edit ? `${deck.name}` : "Create Deck"} 
                edit={edit}
                deck={deck} 
                setDeck={setDeck} 
                isDeck={isDeck} 
                />
            </div>
            <div>
                <h1>{edit ? "Edit Deck" : "Create Deck"}</h1>
            </div>
            <div>
                <DeckForm 
                deck={deck} 
                edit={edit}

                />
            </div>
        </div>
    );
}