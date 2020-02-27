import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject("card_images")
export class CardImagesEntity{
    @JsonProperty("id",Number)
    id : number;
    @JsonProperty("image_url",String)
    image_url : string ="";
    @JsonProperty("image_url_small",String)
    image_url_small : string ="";
    @JsonProperty("card_path",String )
    card_path : string="";
    @JsonProperty("card_name",String)
    card_name : string="";
}