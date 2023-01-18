import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import CardForm from "../Cards/CardForm";
import { readCard } from "../../utils/api";

export default function AddEditCard({ deck, setDeck, edit = false }) {
    // creates states for card
    const [ card, setCard ] = useState({});
    // gets deck and card id from url params
    const { cardId } = useParams();

    
    //does the same but for cards
    useEffect(() => {
        if (edit) {
            async function loadCard() {
                const cardFromAPI = await readCard(cardId);
                setCard(cardFromAPI);
            };
            loadCard();
        }  
    }, [cardId, edit])

    
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
                <h2> {`${deck.name}: Edit Card`} </h2>
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