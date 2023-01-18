import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumb from "./Breadcrumb";
import EditBtn from "../Btns/EditBtn";
import StudyBtn from "../Btns/StudyBtn";
import AddCardsBtn from "../Btns/AddCardsBtn";
import DeleteBtn from "../Btns/DeleteBtn";
import CardsList from "../Cards/CardsList";

export default function Deck({ deck, setDeck, isDeck, setIsDeck }) {
    // gets the deck id from url 
    const { deckId } = useParams();

    /* declares an empty array to store cards in 
    and is used to render them if they exist */
    let cards = [];

    // reads the deck based on the url params
    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
    }, [deckId, setDeck])

    //if theres a deck and the deck isnt empty
    if (deck?.cards?.length > 0) {
        //renders the cards 
        cards = [
            <div key={"test1"}>
                <h3>Cards</h3>
            </div>,
            <div key={"test2"}>
                <CardsList deckId={deckId} cards={deck.cards}/>
            </div>,
        ]
    }

    return (
        <div>
            <div>
                <Breadcrumb rootName={deck.name} isDeck={isDeck} setIsDeck={setIsDeck} />
            </div>
            <div className="mb-2">
                <div>
                    <h2>{deck.name}</h2>
                </div>
                <div>
                    <p>{deck.description}</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex">
                        <EditBtn deckId={deck.id}/>
                        <StudyBtn deckId={deckId}/>
                        <AddCardsBtn deckId={deck.id} />
                    </div>
                    <div className="d-flex">
                        <DeleteBtn id={deck.id} isDeck={true} deckView={true} />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                {cards}
            </div>
        </div>
    );
}