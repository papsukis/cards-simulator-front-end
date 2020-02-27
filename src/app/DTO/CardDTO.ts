import { JsonProperty } from 'json2typescript';

export class CardDTO {
    @JsonProperty("id", Number)
    id : number;
    @JsonProperty("name", String)
    name : string;
    @JsonProperty("type", String)
    type : string;
    @JsonProperty("desc", String)
    desc : string;
    @JsonProperty("race", String)
    race : string;
    @JsonProperty("archetype", String)
    archetype : string;
    @JsonProperty("level", Number)
    level : number =0;
    @JsonProperty("atribute", String)
    atribute : string ;
    @JsonProperty("maxAtk", Number)
    maxAtk : number=0;
    @JsonProperty("minAtk", Number)
    minAtk : number=0;
    @JsonProperty("maxDef", Number)
    maxDef : number=0 ;
    @JsonProperty("minDef", Number)
    minDef : number=0;
}