import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, fromEvent } from 'rxjs';
import { CardEntity } from '../entities/card';
import { Store } from '../entities/store';
import { DecklistEntity } from '../entities/DecklistEntity';

@Injectable()
export class DataService {

  store=new Store();
  storeSubj :BehaviorSubject<Store>=new BehaviorSubject(new Store())


  constructor() { 

    this.init();
  }
  
  init() {
    this.store = new Store();
  }
  // setState(obj) {
  //   this.store = Object.assign({}, this.store, obj);
  //   this.storeSubj.next(this.store);
  //   console.log(this.store.currentDecklist);
  // }
  setCurrentDecklist(decklist : DecklistEntity){
    this.store.currentDecklist = decklist;
    this.storeSubj.next(this.store);
  }

}
