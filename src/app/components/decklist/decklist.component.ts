import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CardEntity } from 'src/app/entities/card';
import { DecklistEntity } from '../../entities/DecklistEntity';
import { MainDeckEntity } from 'src/app/entities/MainDeckEntity';
import { ExtraDeckEntity } from 'src/app/entities/ExtraDeckEntity';
import { SideDeckEntity } from 'src/app/entities/SideDeckEntity';

@Component({
  selector: 'decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.scss']
})
export class DecklistComponent implements OnInit {
  
  img="assets/img/7.jpg"
  cards : CardEntity[] = [];
  decklist : DecklistEntity;
  mainDeck : MainDeckEntity = new MainDeckEntity();
  extraDeck : ExtraDeckEntity = new ExtraDeckEntity();
  sideDeck : SideDeckEntity = new SideDeckEntity();
  // subscribtion= this.data.decklist.subscribe(message => {
  //   this.cards.push(message)
  // });
  
  mainDeckMessage = this.data.mainDeckMessage.subscribe(card => {
      this.mainDeck.cards.push(card);
      console.log(this.mainDeck.cards)//.cards[0].card_images.image_url)
  });
  sideDeckMessage = this.data.sideDeckMessage.subscribe(card => {
    this.sideDeck.cards.push(card);
    console.log(this.sideDeck);
  });
  extraDeckMessage = this.data.extraDeckMessage.subscribe(card => {
    this.extraDeck.cards.push(card);
    console.log(this.extraDeck);
  });

  constructor(private data: DataService) {}

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mainDeckMessage.unsubscribe();
    this.sideDeckMessage.unsubscribe();
    this.extraDeckMessage.unsubscribe();
  }
}
