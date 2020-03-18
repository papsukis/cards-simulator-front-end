import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, ViewChild } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { CardEntity } from '../../entities/card';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  

  //cards : CardEntity[];
  @Input() cards : CardEntity[];
  @Input() resultSize : number;
  trackIds = [];
  @Output() page : EventEmitter<any> = new EventEmitter();
  //@Output() size : EventEmitter<Number> = new EventEmitter();

  constructor(private cardService : CardsService,
              private data:DataService) { 
  }

  ngOnInit() {
   
    this.data.storeSubj.subscribe(store=>{
      this.trackIds=store.trackIds
    })
  }

  search(event :any){
    this.page.emit({"page":event.pageIndex,
                    "size": event.pageSize});
  }


  validateCard(card :CardEntity) : boolean{
    if( this.data.store.currentDecklist.countCard(card) >= 3)
    return true;
    if(card.banlist_info== null )
    return false;
    if(card.banlist_info.ban_tcg === "Banned")
    return true;
    if(card.banlist_info.ban_tcg === "Limited" && 
    (this.data.store.currentDecklist.countCard(card) >= 1))
    return true;
    if(card.banlist_info.ban_tcg === "Semi-Limited" &&
    this.data.store.currentDecklist.countCard(card) >= 2)
    return true;


    return false;
  }

  getBanlistInfo(card : CardEntity){
    if(card.banlist_info==null)
    return null
    if(card.banlist_info.ban_tcg === "Banned")
    return 0;
    if(card.banlist_info.ban_tcg === "Limited")
    return 1;
    if(card.banlist_info.ban_tcg === "Semi-Limited" )
    return 2;
  }

}