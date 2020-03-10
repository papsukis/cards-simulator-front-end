import { JsonProperty } from 'json2typescript';
import { CardEntity } from '../entities/card';

export class CardSearchDTO{
    @JsonProperty("queryResults",[CardEntity])
    queryResults : CardEntity[];
    @JsonProperty("resultSize",Number)
    resultSize : number;
}