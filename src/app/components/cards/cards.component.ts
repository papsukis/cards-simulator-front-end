import { Component, OnInit, Input, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
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
  currentPageCards : CardEntity[];
  trackIds = [];

  constructor(private cardService : CardsService,
              private data:DataService) { 
    console.log(this.cards)
  }

  ngOnInit() {
    //this.cards=this.searchResult;
    // console.log(this.cards)
    this.data.storeSubj.subscribe(store=>{
      this.trackIds=store.trackIds
    })
  }

  getCards(){
    this.cardService.getCards().subscribe((response) => {
      this.cards= response; 
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );
  }
  read(event){
    console.log(event)
    this.currentPageCards=this.cards.slice(event.pageSize*event.pageIndex,(event.pageSize*event.pageIndex)+event.pageSize)
  }
}