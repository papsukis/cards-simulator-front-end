import { CardSetEntity } from './CardSetEntity';
import { CardImagesEntity } from './CardImagesEntity';
import { CardPricesEntity } from './CardPricesEntity';
import {JsonObject, JsonProperty} from "json2typescript";
import { BanlistInfoEntity } from './BanlistInfoEntity';
 
@JsonObject("card")
export class CardEntity{
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
    level : number ;
    @JsonProperty("atribute", String)
    atribute : string ;
    @JsonProperty("atk", Number)
    atk : number;
    @JsonProperty("def", Number)
    def : number;
    @JsonProperty("card_sets", [CardSetEntity])
    card_sets : CardSetEntity = new CardSetEntity;
    @JsonProperty("card_images", [CardImagesEntity])
    card_images : CardImagesEntity = new CardImagesEntity();
    @JsonProperty("card_prices", [CardPricesEntity])
    card_prices : CardPricesEntity = new CardPricesEntity;
    @JsonProperty("banlist_info", [BanlistInfoEntity])
    banlist_info : BanlistInfoEntity=new BanlistInfoEntity();

    constructor(){

    }
}