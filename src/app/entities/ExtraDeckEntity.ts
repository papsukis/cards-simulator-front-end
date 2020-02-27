import { JsonProperty } from 'json2typescript';

import { CardEntity } from './card';

export class ExtraDeckEntity{
    
    @JsonProperty("main_deck_id",Number)
    id : number;
    @JsonProperty("cards",[CardEntity])
    cards : CardEntity[] =[];
}