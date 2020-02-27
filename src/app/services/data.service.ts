import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, fromEvent } from 'rxjs';
import { CardEntity } from '../entities/card';

@Injectable()
export class DataService {
  

  private mainDeck = new BehaviorSubject(new CardEntity);
  private sideDeck = new BehaviorSubject(new CardEntity);
  private extraDeck = new BehaviorSubject(new CardEntity);
  mainDeckMessage = this.mainDeck.asObservable();
  sideDeckMessage = this.sideDeck.asObservable();
  extraDeckMessage = this.extraDeck.asObservable();

  constructor() { }

  addToMainDeck(card: CardEntity){
    this.mainDeck.next(card);
  }
  addToExtraDeck(card: CardEntity){
    this.extraDeck.next(card);
  }
  addToSideDeck(card: CardEntity){
    this.sideDeck.next(card);
  }

}
