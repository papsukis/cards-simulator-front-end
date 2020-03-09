import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, fromEvent } from 'rxjs';
import { CardEntity } from '../entities/card';
import { Store } from '../entities/store';

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
  setState(obj) {
    this.store = Object.assign({}, this.store, obj);
  }

}
