import React from "react";
import { useHistory } from "react-router-dom";
import deleteHandler from "../Decks/deleteHandler";

export default function DeleteBtn({ id, isDeck = false }) {
    const history = useHistory();
    return (
        <button onClick={(event) => {
            //stops the page from refreshing when youhit the delete btn
            event.preventDefault();
            deleteHandler(id, isDeck);
            //when the deck is deleted, goes to home page
            if (isDeck) history.push("/");
            //if it was a card that was deleted then it will stay on the page but refresh it
            history.go(0);
            }} className="btn btn-danger">
            <span 
            //trashcan symbol. 
            className="oi oi-trash"></span>
        </button>
    );
}