import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Main/Home";
import Study from "./Main/Study";
import CreateEditDeck from "./Main/CreateEditDeck";
import Deck from "./Main/Deck";
import AddCard from "./Main/AddCard";
import EditCard from "./Main/EditCard";

function Layout() {
  // states for deck and decks that will be used in the children
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState([]);

  return (
    <>
      <Header />
      <div className="container">
        {/* Switch to seitch between the diffrent routes */}
        <Switch>
          {/* Honme with the path of "/" */}
          <Route exact path="/">
            {/* sending in deck and set deck as props. needed to load the decks on the home page and to send it to deckList */}
            <Home 
            decks={decks} 
            setDecks={setDecks} 
            deckId={deck.Id} />
          </Route>
          {/* Study deck page */}
          <Route path="/decks/:deckId/study">
            <Study 
            deck={deck} 
            setDeck={setDeck} />
          </Route>
          {/* Create deck page */}
          <Route path="/decks/new">
            <CreateEditDeck 
            deck={deck} 
            setDeck={setDeck} />
          </Route>
          {/* Edit deck page */}
          <Route path="/decks/:deckId/edit">
            <CreateEditDeck 
            deck={deck} 
            setDeck={setDeck} 
            edit={true} />
          </Route>
          {/* Edit card page */}
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard
            deckId={deck.id}
            deck={deck}
            setDeck={setDeck}
            edit={true}
            />
          </Route>
          {/* Create card page */}
          <Route path="/decks/:deckId/cards/new">
            <AddCard 
            deckId={deck.id} 
            deck={deck} 
            setDeck={setDeck} />
          </Route>
          {/* current deck page */}
          <Route path="/decks/:deckId">
            <Deck 
            deck={deck} 
            setDeck={setDeck} />
          </Route>
          <Route>
            {/* displays on any page that don't have a route. not found page. */}
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
