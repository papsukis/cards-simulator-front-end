import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, ViewChild } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { CardEntity } from '../../entities/card';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material';


@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  

  //cards : CardEntity[];
  @Input() cards : CardEntity[];
  @Input() resultSize : number;
  currentPageCards : CardEntity[];
  trackIds = [];
  @Output() page : EventEmitter<any> = new EventEmitter();
  //@Output() size : EventEmitter<Number> = new EventEmitter();

  constructor(private cardService : CardsService,
              private data:DataService) { 
  }

  ngOnInit() {
    //this.cards=this.searchResult;
    // console.log(this.cards)
    
    this.data.storeSubj.subscribe(store=>{
      this.trackIds=store.trackIds
    })
  }

  search(event :any){
    this.page.emit({"page":event.pageIndex,
                    "size": event.pageSize});
  }

  read(event){
    this.currentPageCards=this.cards.slice(event.pageSize*event.pageIndex,(event.pageSize*event.pageIndex)+event.pageSize)
  }

}