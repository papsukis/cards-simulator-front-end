import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject("card_prices")
export class CardPricesEntity{
    @JsonProperty("cardmarket_price",Number)
    cardmarket_price : number;
    @JsonProperty("tcgplayer_price",Number)
    tcgplayer_price : number;
    @JsonProperty("ebay_price",Number)
    ebay_price : number;
    @JsonProperty("amazon_price",Number)
    amazon_price : number;
}