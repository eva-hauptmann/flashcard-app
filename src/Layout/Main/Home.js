import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../../utils/api";
import DecksList from "../Decks/DecksList";

export default function Home({ decks, setDecks }) {
   
    useEffect(() => {
        async function load() {
            //waits for listDecks to load then sets it load var
            const load = await listDecks();
            //sets the state decks with setDecks load in the just created load
            setDecks(load);
        }
        //calls on the load function to load any decks from listDecks
        load();
        //only runs the function when setDecks is changed
    }, [setDecks])

    return (
        <div>
            {/* */}
            <Link to="/decks/new" className="btn btn-secondary mb-2">
                <span className="oi oi-plus mr-1"></span>
                Create Deck
            </Link>
            <DecksList decks={decks} />
        </div>
    );
}