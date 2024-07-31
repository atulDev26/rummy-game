import axios from "axios";
import { loadingHide, loadingShow } from "../api/gloabalLoading";

const shuffleCards = "https://www.deckofcardsapi.com/api/deck/new/shuffle"
const drawcards = "https://www.deckofcardsapi.com/api/deck"

const createDeck = async (count) => {
    const response = await axios.get(`${shuffleCards}/?deck_count=${count}`);
    return response.data;

};

const drawCards = async (deckId, count) => {
    if (deckId) {
        const response = await axios.get(`${drawcards}/${deckId}/draw/?count=${count}`);
        console.log(response);
        return response?.data;
    }

};

export { createDeck, drawCards };