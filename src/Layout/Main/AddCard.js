import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import CardForm from "../Cards/CardForm";
import { readDeck } from "../../utils/api";


export default function AddEditCard({ deck, setDeck, edit = false }) {
    // creates states for card
    const [ card ] = useState({});
    // gets deck and card id from url params
    const { deckId, cardId } = useParams();

    // loads the deck with the deckId from params 
    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            //sets the deck to the one loaded
            setDeck(deckFromAPI);
        };
        loadDeck();
        //updates whenever deckId or setDeck changes
    }, [deckId, setDeck])
    


    
    return (
        <div>
            <div>
                <Breadcrumb 
                /*variables for breadcrumb nav*/
                rootName={`${deck?.name}`} 
                isCard={true}
                cardId={cardId} 
                edit={edit}
                deck={deck} 
                setDeck={setDeck} 
                />
            </div>
            <div>
                <h2>{`${deck.name}: Add Card`}</h2>
            </div>
            <div>
                <CardForm 
                card={card}  
                deckId={deck.id} 
                edit={edit} />
            </div>
        </div>
    );
}