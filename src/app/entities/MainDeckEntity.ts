import { CardEntity } from './card';
import { JsonProperty } from 'json2typescript';

export class MainDeckEntity{

    @JsonProperty("main_deck_id",Number)
    id : number;
    @JsonProperty("cards",[CardEntity])
    cards : CardEntity[] =[];

    constructor(){
    }

}