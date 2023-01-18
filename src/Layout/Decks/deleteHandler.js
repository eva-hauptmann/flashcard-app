import { deleteDeck, deleteCard } from "../../utils/api";

// handles the delete for both cards and decks
export default function deleteHandler(id, isDeck=false) {
    /* set the delete message according to what is being deleted */
    let message = "";
    if (isDeck) {
        message = "Do you want to delete this deck?";
    } else {
        message = "Delete this card?"
    }

    const result= window.confirm(
        `${message}\n\nYou will not be able to recover it.`
        );
    if (result && isDeck) deleteDeck(id);
    if (result && !isDeck) deleteCard(id)
    
}