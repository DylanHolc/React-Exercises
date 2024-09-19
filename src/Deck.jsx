import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import axios from "axios";
const BASE_URL = 'https://deckofcardsapi.com/api/deck';

const Deck = () => {
    const [deck, setDeck] = useState(null);
    const [drawnCards, setDrawnCards] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);

    useEffect(function loadDeck() {
        async function requestDeck() {
            const res = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`)
            setDeck(res.data);
        }
        requestDeck();
    }, []);

    async function draw() {
        try {
            const cardRequest = await axios.get(`${BASE_URL}/${deck.deck_id}/draw/?count=1`);
            if (cardRequest.data.remaining === 0) alert('Deck empty');
            const card = cardRequest.data.cards[0];

            setDrawnCards(c => [
                ...c, { id: card.code, name: `${card.value} of ${card.suit}`, image: card.image }
            ]);

        } catch (error) {
            alert(error);
        }
    }

    async function shuffle() {
        setIsShuffling(true);
        try {
            const res = await axios.get(`${BASE_URL}/${deck.deck_id}/shuffle/`);
            setDrawnCards([]);
        } catch (error) {
            alert(error);
        }
        finally {
            setIsShuffling(false);
        }
    }

    function showDrawBtn() {
        if (!deck) return null;
        return (
            <button onClick={draw} disabled={isShuffling}>Draw a Card</button>
        )
    }

    const showShuffleBtn = () => {
        if (!deck) return null;
        return (
            <div>
                <button onClick={shuffle} disabled={isShuffling}>Shuffle Deck</button>
            </div>
        )
    }


    return (

        <div>
            {showDrawBtn()}
            {showShuffleBtn()}
            <div id="card-area">
                {drawnCards.map(c => (
                    <Card key={c.id} name={c.name} image={c.image} />
                ))}
            </div>
        </div>

    )

}

export default Deck;