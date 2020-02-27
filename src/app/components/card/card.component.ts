import { Component, OnInit, Input } from '@angular/core';
import { CardEntity } from '../../entities/card';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card : CardEntity;
  //@Output test: EventEmitter();

  constructor(private dataService : DataService ) { }

  ngOnInit() {
  }
  addToMainDeck(card : CardEntity){
    this.dataService.addToMainDeck(card);
  }
  addToExtraDeck(card : CardEntity){
    this.dataService.addToExtraDeck(card);
  }
  addToSideDeck(card : CardEntity){
    this.dataService.addToSideDeck(card);
  }

}
