import {JsonProperty} from "json2typescript";
import {MainDeckEntity} from '../entities/MainDeckEntity';
import {ExtraDeckEntity} from '../entities/ExtraDeckEntity';
import {SideDeckEntity} from '../entities/SideDeckEntity';

export class DecklistEntity {
    @JsonProperty("decklist_id", Number)
    decklist_id : number;
    @JsonProperty("main_deck", [MainDeckEntity])
    mainDeck : MainDeckEntity;
    @JsonProperty("extra_deck", [ExtraDeckEntity])
    extraDeck : ExtraDeckEntity;
    @JsonProperty("side_deck", [SideDeckEntity])
    sideDeck : SideDeckEntity;
}