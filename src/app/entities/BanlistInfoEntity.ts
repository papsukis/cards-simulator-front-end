import { JsonProperty } from 'json2typescript';

export class BanlistInfoEntity{

    @JsonProperty("banlist_info_id", Number)
    banlist_info_id;
    @JsonProperty("ban_tcg", String)
    ban_tcg : string;
    @JsonProperty("ban_ocg", String)
    ban_ocg : string;
    @JsonProperty("ban_goat", String)
    ban_goat : string;

}