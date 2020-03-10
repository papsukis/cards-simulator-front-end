import { Injectable, ViewChild, ViewChildren } from '@angular/core';
import { CardEntity } from '../entities/card.js';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardDTO } from '../DTO/CardDTO.js';
import { MatPaginator } from '@angular/material';
import { CardSearchDTO } from '../DTO/CardSearchDTO.js';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl: string="http://127.0.0.1:8080/";
  cards : CardEntity[];

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private http : HttpClient) { }

  getCards() : Observable<CardEntity[]>{
      return this.http
      .get<CardEntity[]>(this.baseUrl+"cards");
  }
  
  search(card : CardDTO,page ?: number,size ?: number) : Observable<CardSearchDTO>{
     
    let params = new HttpParams()
                    .set("name",card.name)
                    .set("type",card.type)
                    .set("desc",card.desc)
                    .set("race",card.race)
                    .set("archetype",card.archetype)
                    .set("atribute",card.atribute)
                    .set("level",(card.level).toString())
                    .set("maxAtk",(card.maxAtk).toString())
                    .set("minAtk",(card.minAtk).toString())
                    .set("maxDef",(card.maxDef).toString())
                    .set("minDef", (card.minDef).toString())
                    .set("page",(page).toString())
                    .set("size",(size).toString())

console.log(params)
    return this.http
    .get<CardSearchDTO>(this.baseUrl+'search',{params : params})
    
      //return this.cards;
  }
  
  
    //return this.http.post<CardEntity>(this.baseUrl+"search",card);
  }
