import React, { useEffect } from "react";
import { useParams } from "react-router";
import { readDeck } from "../../utils/api";
import Breadcrumb from "./Breadcrumb";
import StudyCards from "../Cards/StudyCards";
import NotEnoughCards from "../Cards/NotEnoughCards";


export default function Study({ deck, setDeck, isDeck = true }) {
    // gets deck id
    const { deckId } = useParams();

    //reads the deck
    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
        //updates on the deckid or setdeck changeing
    }, [deckId, setDeck])


    return (
        <div>
            <div>
                <Breadcrumb 
                rootName={deck.name} 
                isDeck={isDeck}  
                study={true} 
                deck={deck} 
                setDeck={setDeck} />
            </div>
            <div>
                <h1>{`Study: ${deck.name}`}</h1>
            </div>
            {
            //checks if theres at least 3 cards in deck
            deck.cards?.length > 2 ? 
            (
            <StudyCards 
            //renders the deck info with cards
            cards={deck.cards} deck={deck} />
            ) 
            :
            (
            <NotEnoughCards 
            //displays there isnt enough cards. 
            deckId={deckId} cards={deck.cards} deck={deck} />
            )}   
        </div>
    );
}