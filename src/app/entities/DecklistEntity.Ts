import {JsonProperty} from "json2typescript";
import {MainDeckEntity} from '../entities/MainDeckEntity';
import {ExtraDeckEntity} from '../entities/ExtraDeckEntity';
import {SideDeckEntity} from '../entities/SideDeckEntity';
import { CardEntity } from './card';

export class DecklistEntity {
    @JsonProperty("decklist_id", Number)
    decklist_id : number;
    @JsonProperty("main_deck", [MainDeckEntity])
    mainDeck : MainDeckEntity;
    @JsonProperty("extra_deck", [ExtraDeckEntity])
    extraDeck : ExtraDeckEntity;
    @JsonProperty("side_deck", [SideDeckEntity])
    sideDeck : SideDeckEntity;

    constructor(){
        this.decklist_id=null;
    this.mainDeck = new MainDeckEntity();
    this.extraDeck = new ExtraDeckEntity();
    this.sideDeck = new SideDeckEntity();
    }
    countCard(cardToCount : CardEntity){
        let count : number=0;
        count+=this.mainDeck.cards.filter(card => card.id==cardToCount.id).length;
        count+=this.extraDeck.cards.filter(card => card.id==cardToCount.id).length;
        count+=this.sideDeck.cards.filter(card => card.id==cardToCount.id).length;
        return count;
    }
    mainDeckSize(){
        return this.mainDeck.cards.length;
    }
    extraDeckSize(){
        return this.extraDeck.cards.length;
    }
    sideDeckSize(){
        return this.sideDeck.cards.length;
    }
}