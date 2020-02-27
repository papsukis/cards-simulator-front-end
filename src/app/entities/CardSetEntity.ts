import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject("card_set")
export class CardSetEntity {
    @JsonProperty("set_name",String)
    set_name : string;
    @JsonProperty("set_code",String)
    set_code : string;
    @JsonProperty("set_rarity",String)
    set_rarity : string;
    @JsonProperty("set_price",String)
    set_price : string;
}