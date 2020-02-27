import { JsonProperty } from 'json2typescript';

import { CardEntity } from './card';

export class SideDeckEntity{
    
    @JsonProperty("main_deck_id",Number)
    id : number;
    @JsonProperty("cards",[CardEntity])
    cards : CardEntity[] = [];
    
}