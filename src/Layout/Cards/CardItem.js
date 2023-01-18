import React from "react";
import DeleteBtn from "../Btns/DeleteBtn";
import EditBtn from "../Btns/EditBtn";

export default function CardItem({ deckId,card }) {
    // creates list item that displays card information
    return (
        <li key={card.id} className="card" >
            <div className="card-body">
                <div className="row mb-2">
                    <div className="col">
                        <p className="card-text text-secondary mr-2">{card.front}</p>
                    </div>
                    <div className="col">
                        <p className="card-text text-secondary ml-2">{card.back}</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-end mt-2">
                    <div className="d-flex">
                        <EditBtn deckId={deckId} cardId={card.id}/>
                        <DeleteBtn id={card.id} />
                    </div>
                </div>
            </div>
        </li>
        
    );
}