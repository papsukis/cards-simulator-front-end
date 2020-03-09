import { JsonProperty } from 'json2typescript';

export class BanlistInfoEntity{

    @JsonProperty("banlist_info_id", Number)
    id;
    @JsonProperty("ban_tcg", String)
    banTCG : string;
    @JsonProperty("ban_ocg", String)
    banOCG : string;
    @JsonProperty("ban_goat", String)
    banGoat : string;

}