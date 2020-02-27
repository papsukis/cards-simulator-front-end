import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { CardEntity } from '../../entities/card';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  //cards : CardEntity[];
  @Input() cards : CardEntity[];

  constructor(private cardService : CardsService) { 
    
  }

  ngOnInit() {
    //this.cards=this.searchResult;
    console.log(this.cards)
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
  }
}